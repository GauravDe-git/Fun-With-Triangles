const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-btn");
const outputArea = document.querySelector("#output-area");

function calculateHypotenuse()
{
    if(sides[0].value < 0 || sides[1].value < 0)
    {
        outputArea.innerText = "Sides can't be negative";
    }
    else
    {const sumOfSquares = Number(sides[0].value * sides[0].value + sides[1].value
    * sides[1].value);
    const Hypotenuse = Math.sqrt(sumOfSquares);
    outputArea.innerText = "The Hypotenuse of this Triangle is: " + Hypotenuse.toFixed(2);}
}

calculateBtn.addEventListener("click",calculateHypotenuse);