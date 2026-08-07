function createDivs() {
  const divContainer = document.querySelector(".containerDiv");
  for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("individualDiv");
    divContainer.appendChild(newDiv);
  }
}
createDivs();

const divBox = document.querySelectorAll(".individualDiv");
divBox.forEach((div) => {
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "lightblue";
  });
  div.addEventListener((div) => {
    div.style.backgroundColor = "";
  });
});
