const divContainer = document.querySelector(".containerDiv");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createDivs(count) {
  divContainer.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${count}, 1fr)`;
  for (let i = 0; i < count * count; i++) {
    let opacityNum = 0;
    const newDiv = document.createElement("div");
    newDiv.classList.add("individualDiv");

    newDiv.addEventListener("mouseenter", () => {
      newDiv.style.backgroundColor = getRandomColor();
      if (opacityNum <= 10) {
        opacityNum++;
        newDiv.style.opacity = opacityNum * 0.1;
      }
    });

    divContainer.appendChild(newDiv);
  }
}
createDivs(16);

const newGridBtn = document.querySelector(".newGridBtn");
newGridBtn.addEventListener("click", () => {
  divContainer.innerHTML = "";
  let newDivSize = prompt("Enter New Div Size");
  while (newDivSize > 100 || newDivSize == 0) {
    alert("Number must be bellow 100 and larger than 0");
    newDivSize = prompt("Enter New Div Size");
  }
  createDivs(newDivSize);
});

const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
  const coloredDivs = document.querySelectorAll(".individualDiv");
  coloredDivs.forEach((coloredDiv) => {
    coloredDiv.style.backgroundColor = "";
    coloredDiv.style.opacity = 1;
  });
});
