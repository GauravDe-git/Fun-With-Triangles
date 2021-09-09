const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-btn");
const outputArea = document.querySelector("#output-area");

function calculateHypotenuse()
{
    const sumOfSquares = Number(sides[0].value * sides[0].value + sides[1].value
    * sides[1].value);
    const Hypotenuse = Math.sqrt(sumOfSquares);
    outputArea.innerText = "The Hypotenuse of this Triangle is: " + Hypotenuse;
}

calculateBtn.addEventListener("click",calculateHypotenuse);