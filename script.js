let gridSizeInput = 64;
// let gridSize = 700 / gridSizeInput;

let mainContainer = document.querySelector('.container');
let gridSizeButton = document.querySelector('.grid-size');

function createGrid() {
    for (let i = 0; i < gridSizeInput; i++) {
        let gridRow = document.createElement('div');
        gridRow.setAttribute('class', 'grid-row');
        gridRow.setAttribute('style', 'display: flex;');
        mainContainer.appendChild(gridRow);
    
        for (let j = 0; j < gridSizeInput; j++) {
            let block = document.createElement('div');
            block.setAttribute('class', 'block');
            block.style.width = `${700 / gridSizeInput}px`;
            block.style.height = `${700 / gridSizeInput}px`;
            gridRow.appendChild(block);
            block.addEventListener('mouseover', function() {
                block.style.backgroundColor = 'black';
            });

        }
    }

};

createGrid();

gridSizeButton.addEventListener('click', function() {
    document.querySelectorAll('.block').forEach(e => e.remove());
    gridSizeInput = prompt('Enter grid size here: ')
    createGrid(gridSizeInput);
});



