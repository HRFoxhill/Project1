const token=config.TOKEN_SH;
const MY_API=config.APIKEY_CV;

var index;
var datasetChars=[];
var counter=0;

var character="";
var i=0;

// global variables
URL_SH= `http://superheroapi.com/api/${token}/`
URL_CV=`http://www.comicvine.com/api/search/?format=json&api_key=${MY_API}&resources=character&query=`

var CHARACTERS = [ ['Thor',659],
['Wolverine',717],
 ['Black Panther',106],
  ['DareDevil',201],
   ['Storm',638],
    ['Falcon',251],
     ['Deadpool',213],
     ['Rogue',567],
      ['Phoenix',517],
       ['Iron Man',346],
        ['Hulk',332],
         ['Groot',303],
          ['Rocket Raccoon',566],
           ['Magneto',423],
            ['Loki',414],
             ['Red Skull',550,],
              ['Star-Lord',630],
               ['Doctor Doom',222],
                ['Captain America',149],
                 ['Vision',697],
                  ['Doctor Strange',226]
                   ];

var PATH_image;

function getCharacterId(name) {
   
    var arrayChar=[];    
    // divide CHARACTERS ARRAY into one single ARRAY
    for (var i in CHARACTERS)
    {
        arrayChar.push(CHARACTERS[i][0]);
     }

     console.log(arrayChar);

     index=arrayChar.indexOf(name);
    
     if (index>=0)
     {
         return CHARACTERS[index][1];
     }
     else
     {
         return -1; //no match found
     }

    
}
// ==========================================================
//         superHero API CALL
// ========================================================== 

function superHeroApiRequest(id,renderArea,message){
    counter++;  
    console.log(token);
    console.log("inside apicall ",id);

    $.ajax({
        url: URL_SH+id,
        method: "GET",  
    })
    .done(function(response) {
        console.log("response",response);

    var dataset=[];
     
    dataset[0]=response.powerstats.combat;
    dataset[1]=response.powerstats.durability;
    dataset[2]=response.powerstats.intelligence;
    dataset[3]=response.powerstats.power;
    dataset[4]=response.powerstats.speed;
    dataset[5]=response.powerstats.strength;
    
    console.log("dataset : ",dataset);

    var charObj = {
        name    :   response.name,
        fullname:   response.biography['full-name'],
        gender  :   response.appearance.gender,
        height  :   response.appearance.height,
        weight  :   response.appearance.weight,
        occupation: response.work.occupation,
        dataset :   dataset,
        imgPath :   response.image.url,
    }


    var image=$("<img>");
    image.attr("src",charObj.imgPath);
    var newP=$("<p>");
    // console.log("index and character name",index,CHARACTERS[index][0]);
    newP.html(`<h1> ${message} </h1><p><h2> ${charObj.name}</h2></p>`);
    var newList=$("<ul>");
    newList.html(`  <li>${charObj.fullname}</li><li>${charObj.gender}</li><li>${charObj.height}</li>
                    <li>${charObj.occupation}</li>`);
    
    $(renderArea).append(newP).append(image).append(newList);

    console.log(charObj);
    
    datasetChars.push(charObj.name);
    datasetChars.push(dataset);

    console.log("log data :",datasetChars);

    draw(datasetChars);

    
        
    
    
    
    // // send return object char --- Failed ! or store into FireBase
    // var charObj2string=JSON.stringify(charObj);
    // console.log(charObj2string);
    // return charObj2string;
    // //=======================================
    })
   
}

// ==========================================================
//         ComicVine API CALL
// ========================================================== 

function comicVineApiRequest(name,indice)
{
    character=name;
    if (character==="Phoenix"){i=3;}

    console.log("character is :",character,MY_API);
    $.ajax({
        url: URL_CV+character,
        method: "GET",  
    })
    .done(function(response) {
        console.log("response",response);
        
        var description=response.results[i].deck;
        var details=response.results[i].description;

        $("#details"+indice).append(details);
       $("#details"+indice).hide();

        newlink=$("<a>");
        newlink.attr("href","#");
        newlink.attr("id","alink"+indice);
        newlink.html("<p>more details</p>");


        $("#description"+indice).append(description).append(newlink);

        function printClick() {
            var w = window.open();
            var html = $("#details"+indice).html();
          
          
              $(w.document.body).html(html);
              w.document.title=`${character} details page`;;
          }
          
          $(function() {
              $("#alink"+indice).click(printClick)
          });
    })

    
}

function draw(datasets){

    console.log("inside draw:",datasets);
    console.log("inside 0:",datasets[0]);
    console.log("inside 1:",datasets[1]);
    console.log("inside 2:",datasets[2]);
    console.log("inside 3:",datasets[3]);


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',
    
    // The data for our dataset
    data: {
      labels: ["Combat", "Durability","Intelligence", "Power","Speed","Strength"],
      datasets: [{
          label:datasets[0],
          backgroundColor: 'rgb(66,134,244,0.4)',
          borderColor: '#5042f4',
          borderWidth:3,
          data: datasets[1],
      },
      {        
          label:datasets[2],
          backgroundColor: 'rgb(255, 99, 132,0.4)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth:3,
          data: datasets[3],
      }]
    },
    
    // Configuration options go here
    options: {}
    });


}

