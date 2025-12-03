let display = document.getElementById('display');
let firstNumber = null;
let secondNumber = null;
let operation = null;
let shouldResetDisplay = false;

const numberButtons = document.querySelectorAll('.btn.number');
const operatorButtons = document.querySelectorAll('.btn.operator');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const decimalButton = document.getElementById('decimal');
const backspaceButton = document.getElementById('backspace');

numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        handleNumberClick(this.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const op = this.id;
        if (op === 'decimal') {
            handleDecimal();
        } else if (op === 'backspace') {
            handleBackspace();
        } else {
            handleOperator(op);
        }
    });
});

clearButton.addEventListener('click', handleClear);
equalsButton.addEventListener('click', handleEquals);

function handleNumberClick(num) {
    if (shouldResetDisplay) {
        display.textContent = num;
        shouldResetDisplay = false;
    } else {
        display.textContent = display.textContent === '0' ? num : display.textContent + num;
    }
}

function handleOperator(op) {
    const currentNumber = parseFloat(display.textContent);

    if (firstNumber === null) {
        firstNumber = currentNumber;
    } else if (operation) {
        const result = calculate(firstNumber, secondNumber, operation);
        display.textContent = result;
        firstNumber = result;
    }

    operation = op;
    shouldResetDisplay = true;
}

function handleDecimal() {
    if (shouldResetDisplay) {
        display.textContent = '0.';
        shouldResetDisplay = false;
    } else if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
}

function handleBackspace() {
    let currentDisplay = display.textContent;
    if (currentDisplay.length > 1) {
        display.textContent = currentDisplay.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function handleEquals() {
    if (firstNumber !== null && operation) {
        secondNumber = parseFloat(display.textContent);
        const result = calculate(firstNumber, secondNumber, operation);
        display.textContent = result;
        firstNumber = null;
        secondNumber = null;
        operation = null;
        shouldResetDisplay = true;
    }
}

function calculate(num1, num2, op) {
    switch(op) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : 0;
        default:
            return num2;
    }
}

function handleClear() {
    display.textContent = '0';
    firstNumber = null;
    secondNumber = null;
    operation = null;
    shouldResetDisplay = false;
}