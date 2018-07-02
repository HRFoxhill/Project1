
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
    var questions = [ // TODO: fill with real question and answer

        {
            question: "What is your favorite color",
            answer: ["Black", "Red", "Blue", "Green"],
            anScore: [
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
                [6, 7, 0, 10, -5, 3, 6, 4, 5, 8, 3, 0, 4, 4, 6, 10, 0, -2, 6, 4, 3],
                [6, 1, 2, -5, 8, 6, -5, 4, -6, 3, 0, 2, 4, 2, -6, -10, 8, 0, 9, 8, 6],
                [-4, -6, 5, 0, 4, 3, -6, 6, 7, -3, 10, 9, -4, -3, 10, -7, -4, 8, 0, 0, 2],
            ]
        },


        {
            question: "If you were a tree, what tree would you be?",
            answer: ["Ash", "Holly", "Oak", "Maple"],
            anScore: [
                [6, 7, 0, 10, -5, 3, 6, 4, 5, 8, 3, 0, 4, 4, 6, 10, 0, -2, 6, 4, 3],
                [-4, -6, 5, 0, 4, 3, -6, 6, 7, -3, 10, 9, -4, -3, 10, -7, -4, 8, 0, 0, 2],
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
                [6, 1, 2, -5, 8, 6, -5, 4, -6, 3, 0, 2, 4, 2, -6, -10, 8, 0, 9, 8, 6],
            ]
        },

        {
            question: "What is your favorite weapon",
            answer: ["Hammer", "Energy beams", "Gun", "Bare Hands"],
            anScore: [
                [10, -5, -9, 8, -6, -2, 7, -4, -9, 8, 9, 0, 4, 2, 8, -5, -5, 6, 10, -9, -8],
                [-5, -4, -6, -1, 8, -6, -5, 4, 10, 8, -10, -10, 6, 0, 5, -9, -4, -5, -8, 9, 8],
                [-2, -5, -6, 4, -8, 8, 10, 2, -7, 6, 5, -2, 10, -5, 2, 8, 9, -1, -6, -8, 1],
                [6, 10, 8, 7, 2, 6, 7, 10, 1, -6, 10, 9, -7, 2, 4, 9, 1, -6, 7, -3, -6],
            ]
        },

        {
            question: "How do you like to travel?",
            answer: ["Surfboard", "Rollerblades", "None (Teleport)", "Fly"],
            anScore: [
                [-6, -9, -8, -7, 6, -4, 3, -2, 6, -10, 3, 8, 2, -4, 9, -8, 1, -2, 8, 2],
                [4, 2, 8, 7, -5, 8, 6, 2, -8, 2, -8, -6, 2, -2, 1, -9, 2, -1, 2, 6, 4],
                [8, -4, -6, -1, 8, -6, -5, 4, 10, -2, -10, -8, -3, 5, 8, -9, -4, 6, -8, 9, 10],
                [9, -9, 8, -5, 9, 9, -6, 7, 9, 10, 4, 2, 6, 8, 6, -5, 6, 4, -3, 8, 0],
            ]
        },

        {
            question: "What would you do if you caught someone stealing",
            answer: ["Cut off their hand", "Tackle them", "Tell them \"Don't\"", "Ignore it"],
            anScore: [
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2]
                [6, 10, 8, 7, 2, 6, 7, 10, 1, -6, 10, 9, -7, 2, 4, 9, 1, -6, 7, -3, -6],
                [6, 1, 2, -5, 8, 6, -5, 4, -6, 3, 0, 2, 4, 2, -6, -10, 8, 0, 9, 8, 6],
                [9, -9, 8, -5, 9, 9, -6, 7, 9, 10, 4, 2, 6, 8, 6, -5, 6, 4, -3, 8, 0],
            ]
        },

        {
            question: "What is your defining personality trait?",
            answer: ["Anger", "Fear", "Justice", "Love"],
            anScore: [
                [1, 9, -4, 6, -3, 7, -8, 8, -7, 10, -10, 3, 6, -3, 9, -5, 7, 1, -9, 2],
                [2, -9, -6, 5, 4, 6, -6, -2, 2, 7, 6, 4, 2, -6, -5, 1, 6, 2, 7, -6, 6],
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 1, -2, 4, -8, 9, 6, -10, 6, 7, 9, 10],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
            ]
        },

        {
            question: "How do you like to work",
            answer: ["Alone", "As a leader", "As an underdog", "With my best friend"],
            anScore: [
                [-5, 8, 2, -2, 1, 9, 9, -5, 8, -5, -7, 0, 1, 0, 10, -2, -5, 5, -10, -10, 8]
                [6, 7, 8, -2, -5, -3, 6, 4, -6, 10, 3, -6, 4, 9, 6, 10, 1, 9, 5, -2, 0],
                [-6, -8, -9, -2, 0, 1, 5, 0, -9, 0, -6, -1, 0, -9, 3, -10, -8, 6, 4, 1],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
            ]
        },

        {
            question: "Which superpower is the coolest?",
            answer: ["Brilliant mind", "Raw strength", "Magic", "Trick shots"],
            anScore: [
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 9, 1, -2, 4, -8, 9, 6, -10, 6, 4, 9, 10],
                [6, 10, 8, 7, 2, 6, 7, 10, 1, -6, 10, 9, -7, 2, 4, 9, 1, -6, 7, -3, -6],
                [-5, -4, -6, -1, 8, -6, -5, 4, 10, 8, -10, -10, 6, 0, 5, -9, -4, -5, -8, 9, 8],
                [-2, -5, -6, 4, -8, 8, 10, 2, -7, 6, 5, -2, 10, -5, 2, 8, 9, -1, -6, -8, 1],
            ]
        },

        {
            question: "What is your spirit animal?",
            answer: ["Cheetah", "Elephant", "Dolphin", "Griffin"],
            anScore: [
                [4, 2, 8, 7, -5, 8, 6, 2, -8, 2, -8, -6, 2, -2, 1, -9, 2, -1, 2, 6, 4],
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 9, 1, -2, 4, -8, 9, 6, -10, 6, 4, 9, 10],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [-5, -4, -6, -1, 8, -6, -5, 4, 10, 8, -10, -10, 6, 0, 5, -9, -4, -5, -8, 9, 8],
            ]
        },

        {
            question: "Where would you live?",
            answer: ["Iowa", "Space", "Underground", "Ocean"],
            anScore: [
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [-5, 8, 2, -2, 1, 9, 9, -5, 8, -5, -7, 0, 1, 0, 10, -2, -5, 5, -10, -10, 8]
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
                [-6, -9, -8, -7, 6, -4, 3, -2, 6, -10, 3, 8, 2, -4, 9, -8, 1, -2, 8, 2],
            ]
        },

        {
            question: "Where would you vacation?",
            answer: ["Baghdad", "Neptune", "Paris", "Artic"],
            anScore: [
                [6, 10, 8, 7, 2, 6, 7, 10, 1, -6, 10, 9, -7, 2, 4, 9, 1, -6, 7, -3, -6],
                [-6, -9, -8, -7, 6, -4, 3, -2, 6, -10, 3, 8, 2, -4, 9, -8, 1, -2, 8, 2],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [-5, -4, -6, -1, 8, -6, -5, 4, 10, 8, -10, -10, 6, 0, 5, -9, -4, -5, -8, 9, 8],
            ]
        },

        {
            question: "What weapon do you use to attack a bug?",
            answer: ["Hammer", "Bare Hands", "Spear", "Laser"],
            anScore: [
                [10, -5, -9, 8, -6, -2, 7, -4, -9, 8, 9, 0, 4, 2, 8, -5, -5, 6, 10, -9, -8],
                [6, 10, 8, 7, 2, 6, 7, 10, 1, -6, 10, 9, -7, 2, 4, 9, 1, -6, 7, -3, -6],
                [-6, -9, -8, -7, 6, -4, 3, -2, 6, -10, 3, 8, 2, -4, 9, -8, 1, -2, 8, 2],
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
            ]
        },

        {
            question: "What are you afraid of?",
            answer: ["Spiders", "Cuccumbers", "Bears", "Ghosts"],
            anScore: [
                [10, -5, -9, 8, -6, -2, 7, -4, -9, 8, 9, 0, 4, 2, 8, -5, -5, 6, 10, -9, -8],
                [-6, -9, -8, -7, 6, -4, 3, -2, 6, -10, 3, 8, 2, -4, 9, -8, 1, -2, 8, 2],
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
                [2, -9, -6, 5, 4, 6, -6, -2, 2, 7, 6, 4, 2, -6, -5, 1, 6, 2, 7, -6, 6],
            ]
        },

        {
            question: "What hairstyle do you rock?",
            answer: ["Bald", "Mullet", "Military cut", "Ponytail"],
            anScore: [
                [-4, -6, 5, 0, -6, 7, 8, -6, -7, 0, 7, 6, -4, -3, -8, 10, -4, 5, 0, 8, 2],
                [6, 10, 8, 7, 2, 6, 7, 10, 1, -6, 10, 9, -7, 2, 4, 9, 0, -6, 7, -3, -6],
                [2, 6, 4, 6, -4, 0, -8, -9, 0, 6, 4, 0, -6, -7, 4, -2, 9, 9, 0, 1, 1],
                [9, -2, -6, 2, 6, -9, -8, 6, 6, -5, -6, -4, 0, -2, 9, -9, 6, -2, -8, -8, 4],
            ]
        },

        {
            question: "What is your relationship with your parents?",
            answer: ["I killed them", "See them every holiday", "I never knew them", "They're ok"],
            anScore: [
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [-5, 8, 2, -2, 1, 9, 9, -5, 8, -5, -7, 0, 1, 0, 10, -2, -5, 5, -10, -10, 8]
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 9, 1, -2, 4, -8, 9, 6, -10, 6, 4, 9, 10],
            ]
        },

        {
            question: "Who is your sidekick?",
            answer: ["Jubilee", "Foggy Nelson", "War machine", "Bucky"],
            anScore: [
                [-5, 8, 2, -2, 1, 9, 9, -5, 8, -5, -7, 0, 1, 0, 10, -2, -5, 5, -10, -10, 8],
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [-2, -5, -6, 4, -8, 8, 10, 2, -7, 6, 5, -2, 10, -5, 2, 8, 9, -1, -6, -8, 1],
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
            ]
        },

        {
            question: "What do you do in your freetime?",
            answer: ["Read", "Hunt bad guys", "Try take over the world", "Plot revenge"],
            anScore: [
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 1, -2, 4, -8, 9, 6, -10, 6, 7, 9, 10],
                [8, 0, 9, 9, 2, 4, 10, 4, -8, 3, 6, 2, -2, 9, -6, -9, 3, 4, 0, 1, 2],
                [-5, -6, -10, -2, -6, 5, -8, 9, 2, -4, -10, 3, 9, 10, 10, -6, 7, -5, -9, 2],
                [-5, 5, 7, 4, 6, 0, 9, -5, 8, -5, -7, 0, 1, 0, 10, 8, -5, 4, -10, -10, 2],
            ]
        },

        {
            question: "How many licks does it take to get the center of a lollipop?",
            answer: ["364 licks", "I eat it", "I don't eat food", "3"],
            anScore: [
                [9, -2, -6, 2, 6, -9, -8, 6, 6, -5, -6, -4, 0, -2, 9, -9, 6, -2, -8, -8, 4],
                [8, 0, 9, 9, 2, 4, 10, 4, -8, 3, 6, 2, -2, 9, -6, -9, 3, 4, 0, 1, 2],
                [-5, -6, -10, -2, -6, 5, -8, 9, 2, -4, -10, 3, 9, 10, 10, -6, 7, -5, -9, 2],
                [10, -5, -9, 8, -6, -2, 7, -4, -9, 8, 9, 0, 4, 2, 8, -5, -5, 6, 10, -9, -8],
            ]
        },

        {
            question: "What hogwarts house do you belog to?",
            answer: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
            anScore: [
                [2, 5, 7, 4, 6, 0, 9, -2, -6, -5, 2, 10, -6, 2, 1, -9, 6, 2, 7, 6, -2],
                [-6, -9, -8, -7, 6, -4, 3, -2, 6, -10, 3, 8, 2, -4, 9, -8, 1, -2, 8, 2],
                [8, 0, 6, 9, -2, 4, 8, 2, -6, 9, 1, -2, 4, -8, 9, 6, -10, 6, 4, 9, 10],
                [2, -9, -6, 5, 4, 6, -6, -2, 2, 7, 6, 4, 2, -6, -5, 1, 6, 2, 7, -6, 6],
            ]
        },

        {
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
        for (var j in questions[ind].answer) {


            qLine.append("<br>"); // add break

            // create radio button
            var radButton = $("<input>")
            radButton.attr("type", "radio");
            radButton.attr("data-rules", "required");
            radButton.attr("name", ind); // creates an id with question index
            radButton.attr("value", j); // creates an id with question index
            //radButton.attr("data-question-ind", ind); 
            radButton.attr("data-answer", j); // add answer index

            // add the radio button to the line 
            qLine.append(radButton);

            // create label 
            var qLabel = $("<label>");
            qLabel.attr("for", ind + "-" + j);
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
    qControlGroup.addClass("control-group required");
    qControlGroup.attr("data-rules", "atLeastOne");

    // create button
    var SubmitButton = $("<button>");
    SubmitButton.attr("id", "submit-answers");
    SubmitButton.attr("value", "Submit");
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
    qForm.attr("id", "questionsform");
    qForm.attr("method", "post");
    qForm.attr("action", "#");

    // add fieldset to form
    qForm.append(qFieldset);

    // TODO: add form to dom
    $("#quiz-questions").append(qForm);


    //when quiz is submitted
    $("#submit-answers").on("click", function (event) {

        // makes it not send info
        event.preventDefault();

        // TODO: add quiz form validation - no blank answers
        Ink.requireModules(['Ink.UI.FormValidator_2', 'Ink.Dom.Selector_1'], function (FormValidator, Selector) {
            alert(FormValidator + " \n "+Selector);

            FormValidator.setRule('atLeastOne', 'Select at least one of the radio options', function (value) {
                return !!Selector.select('input[type="radio"]:checked', this.getElement()).length;
            });
            var myValidator = new FormValidator("#questionsform");
        });


        // show the results page
        $("#quiz-results").show();
        $("#quiz-questions").hide();



        // initial score, The value of each index represents how much you are like that corresponding character
        var userScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        // Debug: show which answers where selected

        // go through all of the questions
        for (var i = 0; i < questions.length; i++) {
            console.log($("input:radio[name=" + i + "]:checked").attr("data-answer")); // log index of answer

            // get the answer for each questions, store as p tag
            var currAns = questions[i].answer[$("input:radio[name=" + i + "]:checked").attr("data-answer")];
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
        Ink.requireModules(['Ink.Util.Validator_1'], function (Validator) {

            var result1 = Validator.email('inkdev@sapo.pt');
            Ink.log(result1); // true

            var result2 = Validator.email('inkdev\u0040sapo.pt');
            Ink.log(result2); // true - (\u0040 is at sign) 

            var result3 = Validator.email('sometextnomail');
            Ink.log(result3); // false 
        });

        // gather data from the form

        $("#form").submit(function (event) {
            alert("Handler for .submit() called.");
            event.preventDefault();
        });

       
    }); // end submit

}); // end page load




