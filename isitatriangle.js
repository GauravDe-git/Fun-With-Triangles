const anglesInput = document.querySelectorAll(".input-angle");
const isItTriangleBtn = document.querySelector("#is-triangle-btn");
const outputArea = document.querySelector("#output-area");

function calculateAnglesSum(angle1,angle2,angle3)
{
    const anglesSum = angle1 + angle2 + angle3;
    return anglesSum;
}

function isItaTriangle()
{
    const sumOfAngles = calculateAnglesSum(Number(anglesInput[0].value),
       Number(anglesInput[1].value),Number(anglesInput[2].value));
    if (sumOfAngles === 180)
    {
        outputArea.innerText = "It is a triangle!"
    }
    else
    {
        outputArea.innerText = "Nope, not a triangle"
    }
}

isItTriangleBtn.addEventListener("click",isItaTriangle);
