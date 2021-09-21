const sidesInput = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculateBtn");
const outputText = document.querySelector("#output-area");

function calculateArea()
{
    if(sidesInput[0].value < 0 || sidesInput[1].value < 0)
    {
        outputText.innerText = "Sides can't be negative";
    }
    else
    {const area = 1/2 * sidesInput[0].value * sidesInput[1].value;
    outputText.innerText = "The Area of this Triangle is: " + area.toFixed(2);}
}

calculateBtn.addEventListener("click",calculateArea);