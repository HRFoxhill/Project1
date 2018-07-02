
//Initialize Firebase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyACgkF4a2d5pMQT2ldJCClcX3XiMchq9vc",
    authDomain: "marvelproject-71ef6.firebaseapp.com",
    databaseURL: "https://marvelproject-71ef6.firebaseio.com",
    projectId: "marvelproject-71ef6",
    storageBucket: "marvelproject-71ef6.appspot.com",
    messagingSenderId: "1070813482024"
  };
  
  firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// var database = ...
  var database = firebase.database()



// when page loads
$(document).ready(function () {

    $("#quiz-results").hide();
    $("#quiz-questions").show();

    // question array (hold our question objects)
    var questions =[ // TODO: fill with real question and answer

        {
            question: "What is your favorite color",
            answer : ["Black", "Red", "Blue", "Green"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },


        {
            question: "If you were a tree, what tree would you be?",
            answer : ["Ash", "Holly", "Evergreen", "Oak", "Maple"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "What is your favorite weapon",
            answer : ["Hammer", "Energy beams", "Gun", "Bare Hands"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "How do you like to travel?",
            answer : ["Surfboard", "Rollerblades", "None (Teleport)", "Fly"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "What would you do if you caught someone stealing",
            answer : ["Cut off their hand", "Tackle them", "Tell them \"Don't\"", "Ignore it"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "What is your defining personality trait?",
            answer : ["Anger", "Fear", "Justice", "Love"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "How do you like to work",
            answer : ["Alone", "As a leader", "As an underdog", "With my best friend"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "Which superpower is the coolest?",
            answer : ["Brilliant mind", "Raw strength", "Magic", "Trick shots"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "What is your spirit animal?",
            answer : ["Cheetah", "Elephant", "Dolphin", "Griffin"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "Where would you live?",
            answer : ["Iowa", "Space", "Underground", "Ocean"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "Where would you vacation?",
            answer : ["Baghdad", "Neptune", "Paris", "Artic"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "What weapon do you use to attack a bug?",
            answer : ["Hammer", "Fish", "Spear", "Bare Hands"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "What are you afraid of?",
            answer : ["Spiders", "Cuccumbers", "Bears", "Ghosts"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "What hairstyle do you rock?",
            answer : ["Bald", "Mullet", "Military cut", "Ponytail"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "What is your relationship with your parents?",
            answer : ["I killed them", "See them every holiday", "I never knew them", "They're ok"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "Who is your sidekick?",
            answer : ["Jubilee", "Foggy Nelson", "War machine", "Bucky"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "What do you do in your freetime?",
            answer : ["Read", "Hunt bad guys", "Try take over the world", "Plot revenge"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "How many licks does it take to get the center of a lollipop?",
            answer : ["364 licks", "I eat it", "I don't eat food", "3"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "What hogwarts house do you belog to?",
            answer : ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },

        {
            question: "What time do you wake up in the morning?",
            answer : ["At night", "5:00 AM", "Noon o'clock", "10:00 AM"],
            anScore : [ 
                [],
                [],
                [],
                [],
            ]
        },
    ]; // end questions array

    // create unordered list for all of the questions 
    var qList = $("<ul>");
    qList.addClass("control");
    qList.addClass("unstyled");

    // loop through every questions
    for (var ind in questions) {

        // create div for each question
        var qLine = $("<li>");

        // // create question 
        var quest = $("<h3>");
        quest.text(questions[ind].question);

        //console.log("Q"+ind+": "+questions[ind].question);

        // // add question to the line
        qLine.append(quest);
       
        // add answers
        for(var j in questions[ind].answer){


            qLine.append("<br>"); // add break

             // create radio button
            var radButton = $("<input>")
            radButton.attr("type", "radio");
            radButton.attr("name", ind); // creates an id with question index
            //radButton.attr("data-question-ind", ind); 
            radButton.attr("data-answer", j); // add answer index

            // add the radio button to the line 
            qLine.append(radButton);

            // create label 
            var qLabel = $("<label>");
            qLabel.attr("for",ind+"-"+j);
            qLabel.text(questions[ind].answer[j]);

            //console.log("---"+questions[ind].answer[j]);

            // add label to line
            qLine.append(qLabel);

            // add line to list
            qList.append(qLine);

        }

       
        
    }

     // create div for "control group" 
     var qControlGroup = $("<div>");
     qControlGroup.addClass("control-group");

     // create button
    var SubmitButton = $("<button>");
    SubmitButton.attr("id","submit-answers");
    SubmitButton.text("Donzo!");

     // add question list and submit button to div
     qControlGroup.append(qList);
    qControlGroup.append(SubmitButton);
     

     // create legend
     var qLegend = $("<legend>");
     qLegend.text("What Marvel Character are you?");

     // create fieldset
    var qFieldset = $("<fieldset>");

    // add legend and div to fieldset
    qFieldset.append(qLegend);
    qFieldset.append(qControlGroup);


     // create form
    var qForm = $("<form>");
    qForm.addClass("ink-form");

    // add fieldset to form
    qForm.append(qFieldset);

    // TODO: add form to dom
    $("#quiz-questions").append(qForm);


    //when quiz is submitted
    $("#submit-answers").on("click", function (event) {

        // makes it not send info
        event.preventDefault();

        // TODO: add quiz form validation - no blank answers

        // show the results page
        $("#quiz-results").show();
        $("#quiz-questions").hide();


        
        // initial score, The value of each index represents how much you are like that corresponding character
        var userScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        // Debug: show which answers where selected

        // go through all of the questions
        for(var i =0; i< questions.length; i++ ){
            console.log( $("input:radio[name="+i+"]:checked").attr("data-answer") ); // log index of answer
            
            // get the answer for each questions, store as p tag
            var currAns = questions[i].answer[$("input:radio[name="+i+"]:checked").attr("data-answer")];
            var pTag = $("<p>");
            pTag.text(currAns);

            console.log(currAns); // log the answer

            $("#quiz-results").append(pTag); // add answer to dom

        }
        

        
        // first - the value of the first question
        //$("#quiz-questions").append(firstAns);

        

        // todo: calculate score

        // todo: get marvel info

        // todo: get movie/gif info


        
       
        // Ink form Data Validation
        Ink.requireModules(['Ink.Util.Validator_1'], function(Validator) {

            var result1 = Validator.email('inkdev@sapo.pt');
            Ink.log(result1); // true
          
            var result2 = Validator.email('inkdev\u0040sapo.pt');
            Ink.log(result2); // true - (\u0040 is at sign) 
            
            var result3 = Validator.email('sometextnomail');
            Ink.log(result3); // false 
        });

        // gather data from the form

        $( "#form" ).submit(function( event ) {
            alert( "Handler for .submit() called." );
            event.preventDefault();
          });

    }); // end submit

}); // end page load




