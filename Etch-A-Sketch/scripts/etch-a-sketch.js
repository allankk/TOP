const HOWMANYSQUARESPERLINE = 10 // ADJUST THIS IF NEEDED
//const squareSize = 24
const containerSize = 600
const GRAY_MODE = 'graymode';
const COLOR_MODE = 'colormode';
const INCREMENTAL_MODE = 'incrementalmode';
const ERASE_MODE = 'erasemode'

let gamemode = GRAY_MODE;

function adjustContainerSize() {
    const container = document.getElementById("squareArea");

    container.style.height = containerSize;
    container.style.width = containerSize;
}

function calculateSquareSize(squaresOnLine) {
    let squareSize = Math.floor((containerSize - (squaresOnLine))/squaresOnLine);
    
    return squareSize;
}


function makeGrid(squaresOnLine) {
    const container =  document.getElementById("squareArea");
    container.innerHTML = "";

    const totalSquares = Math.pow(squaresOnLine, 2);
    
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");

        square.classList = "square";
        squareSize = calculateSquareSize(squaresOnLine);
        
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        square.style.backgroundColor = "#ffffff";

        square.addEventListener('mouseover', hoverEffect);

        if (i % squaresOnLine == 0) {
            const nextRow = document.createElement("break");
            nextRow.classList = "break";
            container.appendChild(nextRow);
        }

        container.appendChild(square);
   }
}

function hoverEffect() {
    if (gamemode == GRAY_MODE) {
        event.target.style.backgroundColor = "#808080";
    }

    if (gamemode == INCREMENTAL_MODE) {
        let currentColor = event.target.style.backgroundColor;

        let colorInHex = rgb2hex(currentColor);
        let newColor = "#" + LightenDarkenColor(colorInHex, -40);

        event.target.style.backgroundColor = newColor;
    }

    if (gamemode == COLOR_MODE) {
        let newColor = getRandomColor();

        event.target.style.backgroundColor = newColor;
    }

    if (gamemode == ERASE_MODE) {
        let newColor = "#ffffff";

        event.target.style.backgroundColor = newColor;
    }
}

function LightenDarkenColor(col, amt) {
    var num = parseInt(col, 16);
    var r = (num >> 16) + amt;
    var b = ((num >> 8) & 0x00FF) + amt;
    var g = (num & 0x0000FF) + amt;
    var newColor = g | (b << 8) | (r << 16);
    return newColor.toString(16);
  }

function resetGame() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.style.backgroundColor = "#ffffff";
    })
}

function newGrid() {
    let inputValue = document.getElementById("makeNewGrid").value;
    
    if (inputValue > 100) {
        alert("value too high, might cause performance issues");
        return;
    }

    makeGrid(inputValue);
}

function addButtons() {
    const resetBtn = document.querySelector('#resetBtn');
    resetBtn.addEventListener('click', resetGame)

    const makeNewGrid = document.querySelector('#newGridBtn');
    makeNewGrid.addEventListener('click', newGrid);

    const grayMode = document.querySelector('#grayMode');
    grayMode.addEventListener('click', () => {
        gamemode = GRAY_MODE;
    });

    const colorMode = document.querySelector('#colorMode');
    colorMode.addEventListener('click', () => {
        gamemode = COLOR_MODE;
    })

    const incrementalMode = document.querySelector('#incrementalMode');
    incrementalMode.addEventListener('click', () => {
        gamemode = INCREMENTAL_MODE;
    })

    const eraseMode = document.querySelector('#eraseMode');
    eraseMode.addEventListener('click', () => {
        gamemode = ERASE_MODE;
    })
}

function LightenDarkenColor(col, amt) {
    var num = parseInt(col, 16);
    var R = (num >> 16) + amt;
    var B = ((num >> 8) & 0x00FF) + amt;
    var G = (num & 0x0000FF) + amt;
    var newColor = (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255));
    return newColor.toString(16).slice(1);
  }

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    //console.log("" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]));
    return "" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

addButtons();
adjustContainerSize(HOWMANYSQUARESPERLINE);
console.log("got here");
makeGrid(HOWMANYSQUARESPERLINE);
