const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');
const dot = document.getElementById('dot');
const equals = document.getElementById('equals');
const screen = document.getElementById('calc-screen');
let temp = 0;

clear.addEventListener('click', clearScreen);
del.addEventListener('click', clearScreen);
dot.addEventListener('click', inputHandler);
equals.addEventListener('click', operationHandler);
digits.forEach(digit => digit.addEventListener('click', inputHandler));
digits.forEach(digit => digit.addEventListener('click', operationHandler));

function clearScreen() {
    if (this.id === 'clear') {
        screen.textContent = '';
    } else {
        screen.textContent = screen.textContent.slice(0, -1);
    }
}

function inputHandler(event) {
    const buttonText = document.createTextNode(event.target.textContent); // gets the text content of the clicked button 
    if (event.target !== dot || !screen.textContent.includes('.')) {
        if (screen.textContent.length >= 11 && event.target.id !== '00') {
            screen.textContent = screen.textContent.slice(1);
        } else if (screen.textContent.length >= 11 && event.target.id === '00') {
            screen.textContent = screen.textContent.slice(2);
        }
        screen.appendChild(buttonText);
    }

} // add input depending on which button was pressed, for 'dot' should be once

function operationHandler() { }