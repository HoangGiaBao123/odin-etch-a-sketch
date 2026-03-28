const sizeInput = document.getElementById('size-input');
const gridContainer = document.getElementById('grid-container');
const submitButton = document.getElementById('submit');
let isDrawing = false;
let index = 0;

window.addEventListener('mousedown', () => {
    isDrawing = true;
});

window.addEventListener('mouseup', () => {
    isDrawing = false;
});

const submit = () => {
    console.log('Clicked!')
    gridContainer.textContent = '';
    let gridNumber = Number(sizeInput.value);
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    gridContainer.style.border = '2.5px solid grey';
    gridContainer.style.borderRadius = '10px';
    gridContainer.style.boxSizing = 'border-box';
    let totalGrid = gridNumber * gridNumber;
    for(index = 1; index <= totalGrid; index += 1) {
        let gridElement = document.createElement('div');
        gridElement.className = 'squares';
        gridContainer.appendChild(gridElement);
    }
};

submitButton.addEventListener('click', submit);

window.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && document.activeElement === sizeInput) {
        submit();
    }
});

window.addEventListener('mousedown', (e) => {
    if(isDrawing && e.target.className === 'squares') {
        e.preventDefault();
        e.target.style.backgroundColor = 'black';
    }
});

document.addEventListener('mouseover', (e) => {
    if(isDrawing && e.target.className === 'squares') {
        e.target.style.backgroundColor = 'black';
    }
});