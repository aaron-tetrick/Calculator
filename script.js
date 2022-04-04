//Display and Buttons Selector
const display = document.getElementById("display");

//Number button Selectors
const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');

//Non-number button Selectors
const operators = document.getElementsByClassName('op')
const plus = document.querySelector('#plus');
const sub = document.querySelector('#sub');
const multi = document.querySelector('#multi');
const div = document.querySelector('#div');
const clear = document.querySelector("#clear");
const equals = document.querySelector('#equals');


//Number button Event Listeners
zero.addEventListener('click', () => enterNum(zero.value));
one.addEventListener('click', () => enterNum(one.value));
two.addEventListener('click', () => enterNum(two.value));
three.addEventListener('click', () => enterNum(three.value));
four.addEventListener('click', () => enterNum(four.value));
five.addEventListener('click', () => enterNum(five.value));
six.addEventListener('click', () => enterNum(six.value));
seven.addEventListener('click', () => enterNum(seven.value));
eight.addEventListener('click', () => enterNum(eight.value));
nine.addEventListener('click', () => enterNum(nine.value));

//Non-number button Event Listeners
plus.addEventListener('click', () => op('+'));
sub.addEventListener('click', () => op('-'));
multi.addEventListener('click', () => op('*'));
div.addEventListener('click', () => op('/'));
clear.addEventListener('click', clearCalc);
equals.addEventListener('click', () => operate(operatorType, firstNum, secondNum));

//Declare various variables
let firstNum = null;
let secondNum = null;
let operatorType = null;
let displayValue = '';

changeDisplay();

//OPERATORS CHANGE COLOR WHEN PRESSED (WORK IN PROGRESS)
// function pressedOp(type) {
//     if (type === 'div') {
//         div.classList.add('pressed');
//         multi.classList.remove('pressed')
//         sub.classList.remove('pressed');
//         plus.classList.remove('pressed');
//     } else if (type === 'multi') {
//         div.classList.remove('pressed');
//         multi.classList.add('pressed');
//         sub.classList.remove('pressed');
//         plus.classList.remove('pressed');
//     } else if (type === 'sub') {
//         div.classList.remove('pressed');
//         multi.classList.remove('pressed');
//         sub.classList.add('pressed');
//         plus.classList.remove('pressed');
//     } else if (type === 'add') {
//         div.classList.remove('pressed');
//         multi.classList.remove('pressed');
//         sub.classList.remove('pressed');
//         plus.classList.add('pressed');
//     } else {
//         div.classList.remove('pressed');
//         multi.classList.remove('pressed');
//         sub.classList.remove('pressed');
//         plus.classList.remove('pressed');
//     }
// }

//Various math operator functions
function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

//Clears the calculator display
function clearCalc() {
    displayValue = '';
    firstNum = null;
    secondNum = null;
    operatorType = null;
    //pressedOp('none')
    changeDisplay();
}

//Changes the display
function changeDisplay() {
    if (displayValue.length > 13) {
        display.innerText = Number(displayValue).toExponential(4);
    } else {
        display.innerText = displayValue;
    }
}

//Enters an inputted number into the calculator display
function enterNum(num) {
    if (displayValue === "Nice try, pal") {
        clearCalc();
        displayValue = num;
        changeDisplay();
    } else if (firstNum === null && secondNum === null && operatorType !== null) {
        displayValue = num;
        operatorType = null;
        changeDisplay();
    } else if (firstNum === null && secondNum === null) {
        if (displayValue === '0' || displayValue === '' && num === '0') {
            num = '';
        } else 
            displayValue += num;
            changeDisplay();
    } else if (firstNum === null && secondNum !== null) {
        displayValue = num;
        changeDisplay();
        } else if (firstNum !== null && secondNum === null) {
         displayValue = num;
         secondNum = displayValue
         changeDisplay();
     } else if (firstNum !== null && secondNum !== null) {
        if (displayValue === '0' && num === '0') {
            num = '';
        } else 
         displayValue += num;
         secondNum = displayValue;
         changeDisplay();
     } 
}

//Stores the value of the first number of the equation after pressing an operator
function op(type) { 
    if (firstNum === null && secondNum === null && displayValue !== '') {
        operatorType = type;
        firstNum = display.innerHTML;
        displayValue = '';
    } else if (firstNum !== null && secondNum !== null) {
        operate(operatorType, firstNum, secondNum);
        firstNum = result;
        secondNum = null;
        operatorType = type;
    }

}

//Operates the equation and displays the result
function operate(op, num1, num2) {
    if (num1 === null || num2 === null) {
        result = display.innerText;
    } else if (op === '+') {
        result = add(num1, num2);
    }
    else if (op === '-') {
        result = subtract(num1, num2);
    }
    else if (op === '*') {
        result = multiply(num1, num2);
    }
    else if (op === '/') {
        result = divide(num1, num2);
        if (num2 === '0') {
            result = "Nice try, pal";
        } else result = parseFloat(result.toFixed(2));
    }
    displayValue = result 
    firstNum = null;
    secondNum = null;
    //pressedOp('none')
    changeDisplay();
}