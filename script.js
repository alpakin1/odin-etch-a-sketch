let gridSizeInput = 64;
let gridSize = 700 / gridSizeInput;

let mainContainer = document.querySelector('.container');
let gridSizeButton = document.querySelector('.grid-size');

function createGrid(x) {
    for (let i = 0; i < x; i++) {
        let gridRow = document.createElement('div');
        gridRow.setAttribute('style', 'display: flex;')
        mainContainer.appendChild(gridRow);
    
        for (let j = 0; j < x; j++) {
            let block = document.createElement('div');
            block.setAttribute('class', 'block');
            block.style.height = `${gridSize}px`;
            block.style.width = `${gridSize}px`;
            gridRow.appendChild(block);
            block.addEventListener('mouseover', function() {
                block.style.backgroundColor = 'black';
            });

        }
    }

};

createGrid(gridSizeInput);

gridSizeButton.addEventListener('click', function() {
    gridSizeInput = prompt('Enter grid size 1-100: ');
    createGrid(gridSizeInput);
});



