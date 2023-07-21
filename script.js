// flex-a-sketch js

//create work-grid (16x16 grid of square divs)


function drawSketchpad(z = 16) {

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
            square.setAttribute('style', 'border: 1px solid black; width: 10px; height: 10px;');
            square.setAttribute('class', 'square');
            row.appendChild(square);
        }
    });

}

drawSketchpad();

//function for hover over square

const squares = document.querySelectorAll('.square');
console.log(squares);

squares.forEach(square => {
    console.log(square);
    square.addEventListener = ("mouseover", alert('hello'));
    
})



//function to activate square



//function to clear squares



//function to create custom grid (keep below 100x100) (button + prompt)


