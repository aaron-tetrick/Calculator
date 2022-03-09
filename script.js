//Display Selector
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
const plus = document.querySelector('#plus');
const sub = document.querySelector('#sub');
const multi = document.querySelector('#multi');
const div = document.querySelector('#div');
const clear = document.querySelector("#clear");
const equals = document.querySelector('#equals');

//Number button Event Listeners
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

//Non-number button Event Listeners
plus.addEventListener('click', () => op('+'));
sub.addEventListener('click', () => op('-'));
multi.addEventListener('click', () => op('*'));
div.addEventListener('click', () => op('/'));
clear.addEventListener('click', clearCalc);
equals.addEventListener('click', () => operate(operatorType, firstNum, display.innerHTML))


let firstNum;
let secondNum
let operatorType;


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

//Enters an inputted number into the calculator display
function enterNum(num) {
    if (display.textContent.length < 13) {
        display.innerHTML += num.innerHTML;
        console.log(operatorType);
    }  
}


//Stores the value of the first number of the equation after pressing an operator
function op(type) {
    firstNum = display.innerHTML
    operatorType = type;
    display.innerHTML = ''
    console.log(firstNum, "HELLO", display.innerHTML)
}


//Operates the equation and displays the result (Must use operate(op, num1, num2) as a result of clicking "=")
function operate(op, num1, num2) {   
    if (op === '+') {
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
        result = parseFloat(result.toFixed(2));
    }
    display.innerHTML = result
    console.log(`${num1} ${op} ${num2} = ${result}`);
}



