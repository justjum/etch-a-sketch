// flex-a-sketch js

//create work-grid (16x16 grid of square divs)
let colorMode = 'black';

//function to create sketchpad with "z x z" grid
function drawSketchpad(z) {

    const sketchpad = document.querySelector(".sketchpad");


        for (let y=0; y<(z*z); y++) {
            const square = document.createElement('div');
            // calculation to calculate % sizing of squares
            const percent = (1/z*100);
            //console.log(percent);
            square.setAttribute('style', `width: ${percent}%; height: ${percent}%;`);
            square.setAttribute('class', 'square');
            sketchpad.appendChild(square);
        }

        addColor();

        
    };

    



drawSketchpad(z=16);

//function for hover over square

function addColor() {

    const squares = document.querySelectorAll('.square');
    console.log(squares);
    //function to activate square
    
    squares.forEach((square) => {
        
        square.addEventListener('mousedown', function() {
            square.style.backgroundColor = `${color()}`;    
        }); 
        
        square.addEventListener('mouseover', function(e) {
        
        if (e.buttons === 1) {
            square.style.backgroundColor = `${color()}`;
        }
        });
        
    });

}






//function to clear squares



//function to create custom grid (keep below 100x100) (button + prompt)

const newGrid = document.querySelector('.changeGrid');
newGrid.addEventListener('click', function() {
    changeGrid()
});


function changeGrid() {
    let gridSize = prompt("Enter new grid size (max 64):")
    if (gridSize > 64) {
        changeGrid();
    }
    else {
        const sketchpad = document.querySelector(".sketchpad");
        sketchpad.innerHTML = '';
        console.log(sketchpad);
        drawSketchpad(gridSize);
    }
}

// function clear grid

const clear = document.querySelector(".clearGrid")
clear.addEventListener('click', function() {
    clearGrid();
});

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    //console.log(squares);
    squares.forEach((square) => {
    square.style.backgroundColor = "white";
    });
    
}


// function change colour scheme

const colorSelection = document.querySelectorAll('.colorSelection');
//console.log(colorSelection);
colorSelection.forEach((colorOption) => {
    colorOption.addEventListener('click', function(e) {
            console.log(e.srcElement.id);
            if (e.srcElement.id === 'rainbow') {
                colorMode = 'rainbow';
            }
            else if (e.srcElement.id === 'bAndW') {
                colorMode = 'black';
            }
            
    });
});

function color() {
    if (colorMode === 'rainbow') {
        let color = `${randomColor()}`;
        return color;
    }
    else if (colorMode === 'black') {
        let color = 'black';
        return color;
    }
    
}

// function to calculate a random RGB integer (0-255)

function randomInteger(max) {
    return Math.floor(Math.random()*(max +1));
}

// function to produce an RGB string to insert in DOM

function randomColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    
    let rgb = (`rgb(${r},${g},${b})`)
    console.log(rgb);
    return rgb;
}