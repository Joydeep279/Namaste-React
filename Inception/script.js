const element = document.querySelector(".root");
const btn = document.createElement("button");
const countElement = document.createElement("span");
countElement.style.display = "block";
countElement.style.maxWidth = "5rem";
countElement.style.textAlign = "center";

btn.textContent = "CLICKED 0 Times";
element.appendChild(countElement);
element.appendChild(btn);
let count = 0;
countElement.textContent = count;
btn.addEventListener("click", () => {
  btn.textContent = `CLICK ME ${++count} Times`;
  countElement.textContent = count;
});
