let mainContainer = document.querySelector('.container');

let grid = document.querySelector('#gridRow');

function createGrid() {
    for (let i = 0; i < 16; i++) {
        let gridRow = document.createElement('div');
        gridRow.setAttribute('id', 'gridRow');
        gridRow.textContent = 'Sup!';
        mainContainer.appendChild(gridRow);
    
        for (let j = 0; j < 15; j++) {
            let gridCol = document.createElement('div');
            gridCol.setAttribute('id', 'gridCol');
            gridCol.textContent = 'Sup!';
            gridRow.appendChild(gridCol)

        }
    }

};

createGrid();

function paintGrid() {
    grid.setAttribute('style', 'background-color: black;');
}


grid.addEventListener('mouseover', paintGrid)

