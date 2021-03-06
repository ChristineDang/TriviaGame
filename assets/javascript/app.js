$(document).ready(function(){
    
    var questionsArray = {
            question: [{
                Q: "What does .stringify() allow you to do?",
                answers: ["Show the text onto the html page as a string when working with JSON", "Allow you to turn any function into a string", "Overwrites your string function with a new string", "It's not a real function"],
                correctAnswer: 0
            },
            {
                Q: "What is the plastic piece at the end of a shoelace called?",
                answers: ["Lace Tip", "Aglet", "Lace Guard", "Ulna"],
                correctAnswer: 1
            }, 
            {
                Q: "What country is known for potatoes?",
                answers: ["Peru", "United Kingdom", "Italy", "Vietnam"],
                correctAnswer: 0
            },
            {
                Q: "What is the mascot of the University of Florida?",
                answers: ["Cheifs", "Knights", "Gators", "Bulls"],
                correctAnswer: 3
            }]
        }

    var score = {
        wins: 0,
        losses: 0
    }
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    
        function timer() {
            var remainingTime = parseInt($("#timer").html());
            if(remainingTime != 0){
                $("#timer").html(--remainingTime);
            } else {
                $("#timer").text("WOMP WOMP");
                //show score and tell user they've ran out of time
            }
        }
    
        //start game when user clicks on start
        $("#start").click(function(){
            game_interval = setInterval(timer, 1000);
            $("#playGame").show();
            $("#start").hide();
          }) 
        
        const section = document.getElementById('Question');
    
            for(var i = 0; i < questionsArray.question.length; i++){
                var question = questionsArray.question[i];
                const newQ = document.createElement('h4');
                    newQ.textContent = questionsArray.question[i].Q;
                    section.appendChild(newQ);

                for (var j = 0; j < 4; j++)
                    {
                            
                        const ans = document.createElement('input');
                        ans.setAttribute('type', 'radio');
                        ans.setAttribute('id', question.answers[j]);
                        ans.setAttribute('value', question.answers[j]);
                        const label = document.createElement('div');
                        label.setAttribute('class', 'div');
                            label.appendChild(ans);               
                            label.innerHTML += question.answers[j];
                            section.appendChild(label);
                        console.log(ans);

                        //Check if a radio button was selected within time frame
                        //if selected before timer ends, check the value 
                        //if the value is a correct answer add to wins by creating an if else statement that calls upon the score variable
                            //else add to losses
                        
                    }
            

            }

            //move these vars to the top to make them global/organized
                // var score = {
                //     wins: 0,
                //     losses: 0

                // var correctAnswer = 0;
                // var incorrectAnswer = 0;
                // var userAnswer;



            //create a reset of game function
            //this function gets triggered when user selects play again
            //show score 
            //ask if they want to play again
                    //if the value is a correct answer add to wins by creating an if else statement that calls upon the score variable
                    //else add to losses
                        // function checkAnswer() {
                        //     questionsArray.forEach (question => {
                        //         userAnswer = document.querySelector();

                        //         if(userAnswer != null && userAnswer === question.correctAnswer) {
                        //             correctAnswer++;
                        //         } else {
                        //             incorrectAnswer++;
                        //         }
                        //     })

                        //     }

            //create event listener for button in order to know when user has selected an answer and prevents them from selecting multiple answers for one question
                //const button = document.getElementbyId("playButton");
                //button.addEventListener("click", check);
                //button.onClick = function() {check();
            // }

            //make submit button responsive

});



// 6. Who owns the app, Instagram?
// a. Snap Inc
// b. Facebook
// c. Google
// d. Twitter

// 7. What is the Darksaber from Star Wars?
// a. A black-bladed lightsaber created by the first ever Mandalorian who was inducted into the Jedi Order
// b. A lightsaber used on the dark side
// c. A black-bladed lightsaber that gets its color from the rarest kyber crystal
// d. A lightsaber that harneses its energy from multiple kyber crystals

// 8. In golf, when your group reaches the putting green, who is the last to putt?
// a. The person with their ball closest to the hole
// b. The person with their ball farthest to the hole
// c. Alphabetical Order
// d. the person who is in the lead with the lowest stroke score

// 9. How many teeth does an adult human have?
// a. 30
// b. 27
// c. 40
// d. 32

// 10. Which one is not something Joey Tribbiani from Friends has said in the show?
// a. "Joey doesn't share food!"
// b. "How you doin?"
// c. "Here come the meat sweats."
// d. "We were on a break!"



// Class Questions
// {
//     String question = "Whats my name?"
//     String options[] = ["1","2","3","4"]
//     Int answer = 0
// }

// for (i = 0; i < numQuestions; i++)
// {
//     print.question1;
    
//     for (j = 0; j < numOptions; j++)
//     {
//         print.question1.option[j]
//     }
// }