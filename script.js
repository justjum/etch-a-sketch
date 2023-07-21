// flex-a-sketch js

//create work-grid (16x16 grid of square divs)


function drawSketchpad(z) {

    const sketchpad = document.querySelector(".sketchpad");

    for (let x=0; x < z; x++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.setAttribute('style', 'height: 10px;');
        sketchpad.appendChild(row);
        
    }

    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        for (let y=0; y<z; y++) {
            const square = document.createElement('div');
            square.setAttribute('style', 'outline: 1px  solid black; width: 9px; height: 9px;');
            square.setAttribute('class', 'square');
            row.appendChild(square);
        }
    });

    addColor();

}

drawSketchpad(z=16);

//function for hover over square

function addColor() {

    const squares = document.querySelectorAll('.square');

    //function to activate square
    
    squares.forEach((square) => {
        
        square.addEventListener('mousedown', function() {
            square.style.backgroundColor = "black";    
        }); 
        
        square.addEventListener('mouseover', function(e) {
        
        if (e.buttons === 1) {
            square.style.backgroundColor = "black";
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