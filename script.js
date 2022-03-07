const display = document.getElementById("display");
const nums = document.querySelectorAll(".num");



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

const plus = document.querySelector('#plus');
const sub = document.querySelector('#sub');
const multi = document.querySelector('#multi');
const div = document.querySelector('#div');
const clear = document.querySelector("#clear");
const equals = document.querySelector('#equals');



zero.addEventListener('click', () => enterNum(zero));
one.addEventListener('click', () => enterNum(one));
two.addEventListener('click', () => enterNum(two));
three.addEventListener('click', () => enterNum(three));
four.addEventListener('click', () => enterNum(four));
five.addEventListener('click', () => enterNum(five));
six.addEventListener('click', () => enterNum(six));
seven.addEventListener('click', () => enterNum(seven));
eight.addEventListener('click', () => enterNum(eight));
nine.addEventListener('click', () => enterNum(nine));


plus.addEventListener('click', () => op('+'));
sub.addEventListener('click', () => op('-'));
multi.addEventListener('click', () => op('*'));
div.addEventListener('click', () => op('/'));
clear.addEventListener('click', clearCalc);
equals.addEventListener('click', () => operate(operatorType, firstNum, display.innerHTML))
 //equals.aEL('click', () => operate(Variable for an operator, Stored variable after clciking an operator, the current display text (display.innerHTML)))


let firstNum;
let secondNum
let operatorType;

//I need to figure out how to transfer an event handler function into another function

//I want to run the operate function when the user presses '='

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
    display.innerHTML = '';
    firstNum = 0;
}

//Holds the value that the user enters into calculator
function enterNum(num) {
    if (display.textContent.length < 13) {
        console.log('HI');
        display.innerHTML += num.innerHTML;
        console.log(operatorType);
    }  
}



//Maybe include an event object with op(), then put e.target.innerText in a variable and that's how to get a variable to put through the operate function.)
function op(type) {
    firstNum = display.innerHTML
    operatorType = type;
    display.innerHTML = ''
}



//Operates the equation and displays the result (Must use operate(op, num1, num2) as a result of clicking "=")


function operate(op, num1, num2) {
    //console.log(op, num1, num2);
    if (op === '+') {
    result = add(num1, num2);
    console.log(op, num1, num2, result)
    }
    else if (op === '-') {
        result = subtract(num1, num2);
        console.log(op, num1, num2, result)
    }
    else if (op === '*') {
        result = multiply(num1, num2);
        console.log(op, num1, num2, result)
    }
    else if (op === '/') {
        result = divide(num1, num2);
        result = parseFloat(result.toFixed(2));
        console.log(op, num1, num2, result)
    }
    display.innerHTML = result
}



