const headingElem = document.getElementById("heading");
const btnElem = document.getElementById("btn");
const countElem = document.getElementById("count");
let count = 0;
async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  headingElem.innerHTML = data.slip.advice;
  countElem.innerHTML = ++count;
}

getAdvice();

btnElem.addEventListener("click", getAdvice);
