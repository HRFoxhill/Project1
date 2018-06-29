

// when page loads
$(document).ready(function () {

    // question array
    var questions = [ // todo: fill with real question and answer
        {
            "question": "What weapon do you use to attack a bug?",

            answers: ["","","",""]
        },

        
        // todo: add all questions

    ];




    // todo: add questions to dom

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
        qDiv.append(quest);

       
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

    var SubmitButton = $("<button>")





    //when quiz is submitted
    $("submit-answers").on("click", function () {

        var userScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        // todo: calculate score

        // todo: get marvel info

        // todo: get movie/gif info

    }); // end submit

}); // end page load




