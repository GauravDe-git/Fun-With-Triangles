const sidesInput = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculateBtn");
const outputText = document.querySelector("#output-area");

function calculateArea()
{
    const area = 1/2 * sidesInput[0].value * sidesInput[1].value;
    outputText.innerText = "The Area of this Triangle is: " + area;
}

calculateBtn.addEventListener("click",calculateArea);