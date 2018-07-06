
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

    Ink.requireModules(['Ink.Util.Validator_1', 'Ink.Dom.Event_1'], function (FormValidator, InkEvent) {
        
        $("#form").submit(function (event) {
            //alert("Handler for .submit() called.");
            event.preventDefault();
    
            var name=$("#name").val();
            var email=$("#e-mail").val();
    
            var valid=FormValidator.email(email);
            
            if (valid){
                console.log(name);
                console.log(email);
                console.log("valid is ", valid);

                //TO DO: store info in database
               // $(`.ink-shade`).attr("style","display:none;");
               $("#submit-modal").attr("value","close");
               $("#submit-modal").addClass("ink-dismiss");
            }
           
        })
        
    });

    $("#quiz-results").hide();
    $("#quiz-questions").show();

    


    // question array (hold our question objects)
    var questions = [

        {   //Q.1
            question: "What is your favorite color?",
            answer: ["Black", "Red", "Blue", "Green"],
            anScore: [
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
                [6, 7, 0, 10, -5, 3, 6, 4, 5, 8, 3, 0, 4, 4, 6, 10, 0, -2, 6, 4, 3],
                [6, 1, 2, -5, 8, 6, -5, 4, -6, 3, 0, 2, 4, 2, -6, -10, 8, 0, 9, 8, 6],
                [-4, -6, 5, 0, 4, 3, -6, 6, 7, -3, 10, 9, -4, -3, 10, -7, -4, 8, 0, 0, 2],
            ]
        },


        {   //Q.2
            question: "If you were a tree, what tree would you be?",
            answer: ["Ash", "Holly", "Oak", "Maple"],
            anScore: [
                [6, 7, 0, 10, -5, 3, 6, 4, 5, 8, 3, 0, 4, 4, 6, 10, 0, -2, 6, 4, 3],
                [-4, -6, 5, 0, 4, 3, -6, 6, 7, -3, 10, 9, -4, -3, 10, -7, -4, 8, 0, 0, 2],
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
                [6, 1, 2, -5, 8, 6, -5, 4, -6, 3, 0, 2, 4, 2, -6, -10, 8, 0, 9, 8, 6],
            ]
        },

        {   //Q.3
            question: "What is your favorite weapon?",
            answer: ["Hammer", "Energy beams", "Gun", "Bare Hands"],
            anScore: [
                [10, -5, -9, 8, -6, -2, 7, -4, -9, 8, 9, 0, 4, 2, 8, -5, -5, 6, 10, -9, -8],
                [-5, -4, -6, -1, 8, -6, -5, 4, 10, 8, -10, -10, 6, 0, 5, -9, -4, -5, -8, 9, 8],
                [-2, -5, -6, 4, -8, 8, 10, 2, -7, 6, 5, -2, 10, -5, 2, 8, 9, -1, -6, -8, 1],
                [6, 10, 8, 7, 2, 6, 7, 10, 1, -6, 10, 9, -7, 2, 4, 9, 1, -6, 7, -3, -6],
            ]
        },

        {   //Q.4
            question: "How do you like to travel?",
            answer: ["Surfboard", "Rollerblades", "None (Teleport)", "Fly"],
            anScore: [
                [-6, -9, -8, -7, 6, -4, 3, -2, 6, -10, 3, 8, 2, -4, 9, -8, 1, -2, 8, 2],
                [4, 2, 8, 7, -5, 8, 6, 2, -8, 2, -8, -6, 2, -2, 1, -9, 2, -1, 2, 6, 4],
                [8, -4, -6, -1, 8, -6, -5, 4, 10, -2, -10, -8, -3, 5, 8, -9, -4, 6, -8, 9, 10],
                [9, -9, 8, -5, 9, 9, -6, 7, 9, 10, 4, 2, 6, 8, 6, -5, 6, 4, -3, 8, 0],
            ]
        },

        {   //Q.5
            question: "What would you do if you caught someone stealing?",
            answer: ["Cut off their hand", "Tackle them", "Tell them \"Don't\"", "Ignore it"],
            anScore: [
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2]
                [6, 10, 8, 7, 2, 6, 7, 10, 1, -6, 10, 9, -7, 2, 4, 9, 1, -6, 7, -3, -6],
                [6, 1, 2, -5, 8, 6, -5, 4, -6, 3, 0, 2, 4, 2, -6, -10, 8, 0, 9, 8, 6],
                [9, -9, 8, -5, 9, 9, -6, 7, 9, 10, 4, 2, 6, 8, 6, -5, 6, 4, -3, 8, 0],
            ]
        },

        {   //Q.6
            question: "What is your defining personality trait?",
            answer: ["Anger", "Fear", "Justice", "Love"],
            anScore: [
                [1, 9, -4, 6, -3, 7, -8, 8, -7, 10, -10, 3, 6, -3, 9, -5, 7, 1, -9, 2],
                [2, -9, -6, 5, 4, 6, -6, -2, 2, 7, 6, 4, 2, -6, -5, 1, 6, 2, 7, -6, 6],
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 1, -2, 4, -8, 9, 6, -10, 6, 7, 9, 10],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
            ]
        },

        {   //Q.7
            question: "How do you like to work?",
            answer: ["Alone", "As a leader", "As an underdog", "With my best friend"],
            anScore: [
                [-5, 8, 2, -2, 1, 9, 9, -5, 8, -5, -7, 0, 1, 0, 10, -2, -5, 5, -10, -10, 8]
                [6, 7, 8, -2, -5, -3, 6, 4, -6, 10, 3, -6, 4, 9, 6, 10, 1, 9, 5, -2, 0],
                [-6, -8, -9, -2, 0, 1, 5, 0, -9, 0, -6, -1, 0, -9, 3, -10, -8, 6, 4, 1],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
            ]
        },

        {   //Q.8
            question: "Which superpower is the coolest?",
            answer: ["Brilliant mind", "Raw strength", "Magic", "Trick shots"],
            anScore: [
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 9, 1, -2, 4, -8, 9, 6, -10, 6, 4, 9, 10],
                [6, 10, 8, 7, 2, 6, 7, 10, 1, -6, 10, 9, -7, 2, 4, 9, 1, -6, 7, -3, -6],
                [-5, -4, -6, -1, 8, -6, -5, 4, 10, 8, -10, -10, 6, 0, 5, -9, -4, -5, -8, 9, 8],
                [-2, -5, -6, 4, -8, 8, 10, 2, -7, 6, 5, -2, 10, -5, 2, 8, 9, -1, -6, -8, 1],
            ]
        },

        {   //Q.9
            question: "What is your spirit animal?",
            answer: ["Cheetah", "Elephant", "Dolphin", "Griffin"],
            anScore: [
                [4, 2, 8, 7, -5, 8, 6, 2, -8, 2, -8, -6, 2, -2, 1, -9, 2, -1, 2, 6, 4],
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 9, 1, -2, 4, -8, 9, 6, -10, 6, 4, 9, 10],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [-5, -4, -6, -1, 8, -6, -5, 4, 10, 8, -10, -10, 6, 0, 5, -9, -4, -5, -8, 9, 8],
            ]
        },

        {   //Q.10
            question: "Where would you live?",
            answer: ["Iowa", "Space", "Underground", "Ocean"],
            anScore: [
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [-5, 8, 2, -2, 1, 9, 9, -5, 8, -5, -7, 0, 1, 0, 10, -2, -5, 5, -10, -10, 8],
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
                [-6, -9, -8, -7, 6, -4, 3, -2, 6, -10, 3, 8, 2, -4, 9, -8, 1, -2, 8, 2],
            ]
        },

        {   //Q.11
            question: "Where would you vacation?",
            answer: ["Baghdad", "Neptune", "Paris", "Artic"],
            anScore: [
                [6, 10, 8, 7, 2, 6, 7, 10, 1, -6, 10, 9, -7, 2, 4, 9, 1, -6, 7, -3, -6],
                [-6, -9, -8, -7, 6, -4, 3, -2, 6, -10, 3, 8, 2, -4, 9, -8, 1, -2, 8, 2],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [-5, -4, -6, -1, 8, -6, -5, 4, 10, 8, -10, -10, 6, 0, 5, -9, -4, -5, -8, 9, 8],
            ]
        },

        {   //Q.12
            question: "What weapon do you use to attack a bug?",
            answer: ["Hammer", "Bare Hands", "Spear", "Laser"],
            anScore: [
                [10, -5, -9, 8, -6, -2, 7, -4, -9, 8, 9, 0, 4, 2, 8, -5, -5, 6, 10, -9, -8],
                [6, 10, 8, 7, 2, 6, 7, 10, 1, -6, 10, 9, -7, 2, 4, 9, 1, -6, 7, -3, -6],
                [-6, -9, -8, -7, 6, -4, 3, -2, 6, -10, 3, 8, 2, -4, 9, -8, 1, -2, 8, 2],
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
            ]
        },

        {   //Q.13
            question: "What are you afraid of?",
            answer: ["Spiders", "Cuccumbers", "Bears", "Ghosts"],
            anScore: [
                [10, -5, -9, 8, -6, -2, 7, -4, -9, 8, 9, 0, 4, 2, 8, -5, -5, 6, 10, -9, -8],
                [-6, -9, -8, -7, 6, -4, 3, -2, 6, -10, 3, 8, 2, -4, 9, -8, 1, -2, 8, 2],
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
                [2, -9, -6, 5, 4, 6, -6, -2, 2, 7, 6, 4, 2, -6, -5, 1, 6, 2, 7, -6, 6],
            ]
        },

        {   //Q.14
            question: "What hairstyle do you rock?",
            answer: ["Bald", "Mullet", "Military cut", "Ponytail"],
            anScore: [
                [-4, -6, 5, 0, -6, 7, 8, -6, -7, 0, 7, 6, -4, -3, -8, 10, -4, 5, 0, 8, 2],
                [6, 10, 8, 7, 2, 6, 7, 10, 1, -6, 10, 9, -7, 2, 4, 9, 0, -6, 7, -3, -6],
                [2, 6, 4, 6, -4, 0, -8, -9, 0, 6, 4, 0, -6, -7, 4, -2, 9, 9, 0, 1, 1],
                [9, -2, -6, 2, 6, -9, -8, 6, 6, -5, -6, -4, 0, -2, 9, -9, 6, -2, -8, -8, 4],
            ]
        },

        {   //Q.15
            question: "What is your relationship with your parents?",
            answer: ["I killed them", "See them every holiday", "I never knew them", "They're ok"],
            anScore: [
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [-5, 8, 2, -2, 1, 9, 9, -5, 8, -5, -7, 0, 1, 0, 10, -2, -5, 5, -10, -10, 8]
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 9, 1, -2, 4, -8, 9, 6, -10, 6, 4, 9, 10],
            ]
        },

        {   //Q.16
            question: "Who is your sidekick?",
            answer: ["Jubilee", "Foggy Nelson", "War machine", "Bucky"],
            anScore: [
                [-5, 8, 2, -2, 1, 9, 9, -5, 8, -5, -7, 0, 1, 0, 10, -2, -5, 5, -10, -10, 8],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [-2, -5, -6, 4, -8, 8, 10, 2, -7, 6, 5, -2, 10, -5, 2, 8, 9, -1, -6, -8, 1],
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
            ]
        },

        {   //Q.17
            question: "What do you do in your freetime?",
            answer: ["Read", "Hunt bad guys", "Try take over the world", "Plot revenge"],
            anScore: [
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 1, -2, 4, -8, 9, 6, -10, 6, 7, 9, 10],
                [8, 0, 9, 9, 2, 4, 10, 4, -8, 3, 6, 2, -2, 9, -6, -9, 3, 4, 0, 1, 2],
                [-5, -6, -10, -2, -6, 5, -8, 9, 2, -4, -10, 3, 9, 10, 10, -6, 7, -5, -9, 2],
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
            ]
        },

        {   //Q.18
            question: "How many licks does it take to get the center of a lollipop?",
            answer: ["364 licks", "I eat it", "I don't eat food", "3"],
            anScore: [
                [9, -2, -6, 2, 6, -9, -8, 6, 6, -5, -6, -4, 0, -2, 9, -9, 6, -2, -8, -8, 4],
                [8, 0, 9, 9, 2, 4, 10, 4, -8, 3, 6, 2, -2, 9, -6, -9, 3, 4, 0, 1, 2],
                [-5, -6, -10, -2, -6, 5, -8, 9, 2, -4, -10, 3, 9, 10, 10, -6, 7, -5, -9, 2],
                [10, -5, -9, 8, -6, -2, 7, -4, -9, 8, 9, 0, 4, 2, 8, -5, -5, 6, 10, -9, -8],
            ]
        },

        {   //Q.19
            question: "What hogwarts house do you belog to?",
            answer: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
            anScore: [
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [-6, -9, -8, -7, 6, -4, 3, -2, 6, -10, 3, 8, 2, -4, 9, -8, 1, -2, 8, 2],
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 9, 1, -2, 4, -8, 9, 6, -10, 6, 4, 9, 10],
                [2, -9, -6, 5, 4, 6, -6, -2, 2, 7, 6, 4, 2, -6, -5, 1, 6, 2, 7, -6, 6],
            ]
        },

        {   //Q.20
            question: "What time do you wake up in the morning?",
            answer: ["At night", "5:00 AM", "Noon o'clock", "10:00 AM"],
            anScore: [
                [2, -9, -6, 5, 4, 6, -6, -2, 2, 7, 6, 4, 2, -6, -5, 1, 6, 2, 7, -6, 6],
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 9, 1, -2, 4, -8, 9, 6, -10, 6, 4, 9, 10],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [8, 0, 9, 9, 2, 4, 10, 4, -8, 3, 6, 2, -2, 9, -6, -9, 3, 4, 0, 1, 2],
            ]
        },
    ]; // end questions array

    // create unordered list for all of the questions 
    var qList = $("#questionsList");
    // qList.addClass("control");
    // qList.addClass("unstyled");

    // loop through every questions
    for (var ind in questions) {

        // create div for each question
        var qLine = $("<li>");

        // create header for the current question
        var quest = $("<h5>");

        var qNum = parseInt(ind) +1; // find the question number

        let qId = "question"+qNum
        quest.attr("id",qId) // add question number data
       
        quest.text(qNum+") "+questions[ind].question); // add question to form

        //console.log("Q"+ind+": "+questions[ind].question);

        // // add question to the line
        qLine.append(quest);

        // add answers
        for (var j in questions[ind].answer) {

            // add a break after each radio button, (ignore first time through loop)
            if(parseInt(j) > 0){
                qLine.append("<br>"); // add break
            }
           
            // create radio button
            var radButton = $("<input>")
            radButton.addClass("required");
            radButton.attr("type", "radio");
            radButton.attr("value", j);
            radButton.attr("id", "myInput");
            radButton.attr("name", ind); // creates an id with question index
            //radButton.attr("data-question-ind", ind); 
            radButton.attr("data-answer", j); // add answer index

            // add the radio button to the line 
            qLine.append(radButton);

            // create label for the current radio button
            var qLabel = $("<label>");
            var label = ("for", ind + "-" + j);
            qLabel.attr(label);
            qLabel.text(questions[ind].answer[j]);

            // add label to line
            qLine.append(qLabel);

            // add line to question list
            qList.append(qLine);
        }
    } // end question creation for loop


    //when quiz is submitted
    $("#submit-answers").on("click", function (event) {

        // makes it not send info
        event.preventDefault();

        //  form validation - no blank answers allowed!
        let curValidation = true;
        let errorMessage = "";
        for (let q = 0; q <= 19; q++) {
            let questionid = "" + q;

            let theValue = $("input:radio[name='" + questionid + "']:checked").val();
            if (!theValue){ // if the value is unanswered

                let qNum = q +1; // find question number that was not submitted
                errorMessage = "You need to submit an answer for question "+qNum+"."; // create user error message 

                let jQueryForCurrQuestion = "#question"+qNum;
                $(jQueryForCurrQuestion).addClass("red");


                console.log("Question "+qNum+" not submitted!");
                curValidation = false; // update flag because user didn't answer all questions
            }
               
            else console.log("Question" + questionid + "is" + theValue)
        }


        if(curValidation){ // if the user has answered every question

        // show the results, hide the quiz 
        $("#quiz-results").show();
        $("#quiz-questions").hide();


        // initial score, The value of each index represents how much you are like that corresponding character
        var userScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


        // go through all of the questions
        for (var i = 0; i < questions.length; i++) {
            //console.log( $("input:radio[name="+i+"]:checked").attr("data-answer") ); // log index of answer

            // debug: get the answer for each questions, store as p tag
            // var currAns = questions[i].answer[$("input:radio[name="+i+"]:checked").attr("data-answer")];
            // console.log("Q" + i + ": " + currAns); // log the answer
            
            // get the array for the corresponding answer's score
            var ansArrVals = questions[i].anScore[$("input:radio[name=" + i + "]:checked").attr("data-answer")];

            // debug
            // console.log("--- " + ansArrVals); // log the answer

            // add array values to the user's score (if answer exists)
            if (ansArrVals != null) {

                // add scores from the answer to the users score
                for (var j in ansArrVals) {
                    userScore[j] += ansArrVals[j];
                }
            }
        }

        console.log("User Score: " + userScore);

        // find highest value in 
        var highestInd = -1;
        var highestVal = Number.NEGATIVE_INFINITY;
        for (var w in userScore) {
            if (userScore[w] > highestVal) {
                highestVal = userScore[w];
                highestInd = w;
            }
        }
        //================================== ADD EDISON
        var lowestVal = Math.min.apply(null, userScore);
        console.log("Lowest score is ", lowestVal);
        console.log("Lowest index is", userScore.indexOf(lowestVal));

        //================================== END
        console.log("Highest Value: " + highestVal);
        console.log("Highest Index: " + highestInd);

        var marvelCharacters = ['Thor', 'Wolverine', 'Black Panther', 'DareDevil', 'Storm', 'Falcon', 'Deadpool', 'Rogue', 'Phoenix', 'Iron Man', 'Hulk', 'Groot', 'Rocket Raccoon', 'Magneto', 'Loki', 'Red Skull', // add space on it 
            'Star-Lord', 'Doctor Doom', // correct to Doctor for API search purpose 
            'Captain America', 'Vision', 'Doctor Strange']; // correct to Doctor for API search purpose ]

        // THE HERO THE QUIZ FOUND THAT YOU ARE!!!!!
        var userChar = marvelCharacters[highestInd];
        var lessChar = marvelCharacters[userScore.indexOf(lowestVal)]
        console.log("Your Hero: " + userChar);
        console.log("Your opposite: " + lessChar);

        $("#quiz-results").html(
            `<div class="ink-grid">
                <div class="column-group">
                    <div class="all-35" id="container1"></div>
                    <div class="all-30"><canvas class="canvasStyle" id="myChart" width="200" height="200"></canvas></div>
                    <div class="all-35" id="container2"></div>
                </div>
                <div class="column-group">
                    <div class="all-50" id="description1"></div>
                    <div class="all-50" id="description2"></div>
                </div>
                <div class="column-group">
                    <div class="all-50" id="details1"></div>
                    <div class="all-50" id="details2"></div>
            </div>
            </div>`);

              
        var id = getCharacterId(userChar);
        var id2 = getCharacterId(lessChar);
        console.log(id);

        //==========================================================

        var userCharData = superHeroApiRequest(id, "#container1", "Your matched character");
        console.log("helllooooo ", userCharData);
        superHeroApiRequest(id2, "#container2", "Your least character");

        comicVineApiRequest(userChar, 1);
        comicVineApiRequest(lessChar, 2);

        // Ink UI form Data Validation
        Ink.requireModules(['Ink.Util.Validator_1', 'Ink.Dom.Event_1'], function (FormValidator, InkEvent) {

            var result1 = FormValidator.email('inkdev@sapo.pt');
            Ink.log(result1); // true

            var result2 = FormValidator.email('inkdev\u0040sapo.pt');
            Ink.log(result2); // true - (\u0040 is at sign) 

            var result3 = FormValidator.email('sometextnomail');
            Ink.log(result3); // false 


            // var myForm = Ink.i('questionsForm');
            // var myInput= Ink.i('myInput');

            // InkEvent.on(myInput, 'keyup', function(event) {
            //     var isValid = FormValidator.validate(myForm);
        });


        // // gather data from the user form
        // $("#form").submit(function (event) {
        //     alert("Handler for .submit() called.");
        //     event.preventDefault();
        // });

    }
    else{ // error: user didn't enter all questions
        
        // set up modal to display
        Ink.requireModules( ['Ink.Dom.Selector_1','Ink.UI.Modal_1'], function( Selector, Modal ){
            var modalElement = Ink.s('#errorModal');
            var modalObj = new Modal( modalElement );
        });

        $("#modal-error").text(errorMessage); // update text on modal to display error message
    }

    }); // end submit

}); // end page load
