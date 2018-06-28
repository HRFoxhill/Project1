

// when page loads
$(document).ready(function () {

    // question array
    var questions =[ // todo: fill with real question and answer
        {
            "question": "What weapon do you use to attack a bug?",

            "ans1": "hammer",
            "ans1Score": "[...]",

            "ans2": "laser",
            "ans2Score": "[...]",

            "ans3": "hands",
            "ans3Score": "[...]",

            "ans4": "flyswatter",
            "ans4Score": "[...]",
        },

        {
            "question": "Favorite Color",

            "ans1": "red",
            "ans1Score": "[...]",

            "ans2": "blue",
            "ans2Score": "[...]",

            "ans3": "green",
            "ans3Score": "[...]",

            "ans4": "yellow",
            "ans4Score": "[...]",
        }
        // todo: add all questions
       
    ];




    // todo: add questions to dom

    // create form 
    var qForm = $("<form>")

    // loop through every questions
    for(var ind in questions){

        // create div for each question
        var qDiv = $("<div>");
        qDiv.addClass("questionDiv");

        // create question 
        var quest = $("<p>");
        quest.append(questions[ind].question);

        // add question
        qDiv.append(quest);

        // add radio button
        var rad1 = $("<input>")
        rad1.attr("type","radio");
        rad1.addclass("radionClass");

               
        }

        var SubmitButton= $("<button>")





    //when quiz is submitted
    $("submit-answers").on("click", function () {

        var userScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        // todo: calculate score

        // todo: get marvel info

        // todo: get movie/gif info

    }); // end submit

}); // end page load




