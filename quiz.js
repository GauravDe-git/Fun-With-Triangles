const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answer-btn");
const outputText = document.querySelector("#output-area");

const correctAnswers = ["90°","right angled","Equilateral Triangle","one right angle","12,26,20"];

function calculateScore()
{
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values())
    {
        if(value === correctAnswers[index])
        {
            score = score + 1;
        }
        index = index + 1;
    }
    outputText.innerText = "Your score: " + score;
}


submitBtn.addEventListener("click",calculateScore);