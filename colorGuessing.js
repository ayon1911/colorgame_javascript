var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("displayColor");
var messageDisplay = document.querySelector("#message");
var pickedColor = randomColor();
displayColor.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = randomColor();
  displayColor.textContent = pickedColor;

  for(var i = 0; i < squares.length; i++) {
    if (colors[i]){
      squares[i].style.background = colors[i]
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = randomColor();
  displayColor.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});



resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numSquares);
  pickedColor = randomColor();
  displayColor.textContent = randomColor();
  h1.style.background = "steelblue";
  this.textContent = "New Colors"
  messageDisplay.textContent = ""

  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
});

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {

      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.background = pickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors (color) {
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.background = color;
  }
}

function randomColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var  i = 0; i < num; i++) {
    arr.push(ranColor())
  }
  return arr;
}

function ranColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
