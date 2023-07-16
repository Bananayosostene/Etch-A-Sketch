let gridSize = 16;
let currentColor = "black";
let isErasing = false;

function createGrid() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", changeColor);
    container.appendChild(square);
  }
}

function setNewGridSize() {
  const newGridSize = prompt("Enter the new grid size (2-100):");

  if (newGridSize !== null) {
    const parsedGridSize = parseInt(newGridSize);
    if (
      !isNaN(parsedGridSize) &&
      parsedGridSize >= 2 &&
      parsedGridSize <= 100
    ) {
      gridSize = parsedGridSize;
      createGrid();
    } else {
      alert("Invalid input. Please enter a number between 2 and 100.");
    }
  }
}

function changeColor(event) {
  const square = event.target;
  let color;

  if (isErasing) {
    color = "white";
  } else {
    switch (currentColor) {
      case "black":
        color = "black";
        break;
      case "red":
        color = "red";
        break;
      case "blue":
        color = "blue";
        break;
      case "green":
        color = "green";
        break;
      case "rainbow":
        color = getRandomColor();
        break;
      default:
        color = "black";
    }
  }

  square.style.backgroundColor = color;
}

function setColor(color) {
  currentColor = color;
  isErasing = false;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function clearGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

function eraseGrid() {
  isErasing = true;
  currentColor = "white";
}

createGrid();
