

// when page loads
$(document).ready(function () {

    // question array (hold our question objects)
    var questions =[ // todo: fill with real question and answer

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

    // create form 
    var qForm = $("<form>")

    // loop through every questions
    for (var ind in questions) {

        // create div for each question
        var qDiv = $("<div>");
        qDiv.addClass("questionDiv");

        // create question 
        var quest = $("<h3>");
        quest.append(questions[ind].question);

        // add question 
        qDDiv.append(quest);

       
        // add answers
        for(var j in questions[ind].answers){

            qDiv.append("<br>"); // add break

             // create radio button
            var radButton = $("<input>")
            radButton.attr("type", "radio");
            radButton.addclass("QName", ind); // add name
            radButton.addclass("ansInd", j); // add an index for each answer

            // add the radio button to the question 
            qDiv.append(radButton);

            // add answer 
            qDiv.append(questions[i].answers[j]);
            qDiv.append("<br>"); // add break


        }

        // add completed question to the form
        qForm.append(qDiv);
    }

    var SubmitButton = $("<button>");
    SubmitButton.attr("id","submit-answers");

    // TODO: add quiz to dom


    //when quiz is submitted
    $("#submit-answers").on("click", function (event) {

        // makes it not send info
        event.preventDefault();
        
        // initial score, The value of each index represents how much you are like that corresponding character
        var userScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        // todo: calculate score

        // todo: get marvel info

        // todo: get movie/gif info

    }); // end submit

}); // end page load




