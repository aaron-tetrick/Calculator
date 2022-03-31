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
const operators = document.getElementsByClassName('op')
const plus = document.querySelector('#plus');
const sub = document.querySelector('#sub');
const multi = document.querySelector('#multi');
const div = document.querySelector('#div');
const clear = document.querySelector("#clear");
const equals = document.querySelector('#equals');

console.log(operators);

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
operators[0].addEventListener('click', pressedOp);
operators[1].addEventListener('click', (e) => pressedOp);
operators[2].addEventListener('click', (e) => pressedOp);
operators[3].addEventListener('click', (e) => pressedOp);
plus.addEventListener('click', () => op('+'));
sub.addEventListener('click', () => op('-'));
multi.addEventListener('click', () => op('*'));
div.addEventListener('click', () => op('/'));
clear.addEventListener('click', clearCalc);
equals.addEventListener('click', () => operate(operatorType, firstNum, secondNum));


let firstNum = null;
let secondNum = null;
let operatorType = null;
let displayValue = '';

changeDisplay();

function pressedOp(e) {
    e.target.style.backgroundColor = "red";
}

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
    changeDisplay();
}

//Changes the display
function changeDisplay() {
    if (display.innerText.length < 13) {
        display.innerText = displayValue;
    } else {
        console.log(typeof(displayValue));
        display.innerText = Number(displayValue).toExponential();
    }
}
//On first click-- Enter a number and it is displayed on the calculator --CHECK--
//On second click (Clicks an operator)--If firstNum = null then firstNum = displayValue, operatorType = The operator that was clicked 
//On third click (Would be on enterNum function) -- If firstNum != null then replace the current number in the display with a new value (secondNum) --CHECK--
//On fourth click (Clicks the equals)-- secondNum = displayValue, operate(op that was selected, firstNum, secondNum); 

//Enters an inputted number into the calculator display
function enterNum(num) {
    if (displayValue === "Nice try, pal") {
        clearCalc();
        displayValue = num;
        changeDisplay();
    } else if (firstNum === null && secondNum === null) {
        if (displayValue === '0') {
            num = '';
        } else 
            displayValue += num;
            console.log(`firstNum = ${firstNum}`, `secondNum = ${secondNum}`);
            changeDisplay();
    } else if (firstNum !== null && secondNum === null) {
         displayValue = num;
         secondNum = displayValue
         console.log(`firstNum = ${firstNum}`, `secondNum = ${secondNum}`);
         changeDisplay();
     } else if (firstNum !== null && secondNum !== null) {
         displayValue += num;
         secondNum = displayValue;
         console.log(`firstNum = ${firstNum}`, `secondNum = ${secondNum}`);
         changeDisplay();
     } else if (firstNum === null && secondNum !== null) {
         displayValue = num;
         firstNum = secondNum;
         secondNum = displayValue;
         console.log(`firstNum = ${firstNum}`, `secondNum = ${secondNum}`);
         console.log("Please work");
     }
}

//If both firstNum and secondNum have values the last else if statement is run above.
//If displayValue += num then stringing together several operators concatenates the operands. 
//If displayValue = num then the secondNum won't concatenate together and the pressed number will replace the current number in the display.



//Stores the value of the first number of the equation after pressing an operator
function op(type) {
    if (firstNum === null && secondNum === null) {
        operatorType = type;
        firstNum = displayValue
        displayValue = '';
        console.log(`firstNum = ${firstNum}`, `secondNum = ${secondNum}`);
    } else if (firstNum !== null && secondNum !== null) {
        console.log(operatorType, firstNum, secondNum);
        operate(operatorType, firstNum, secondNum);
        console.log(`I am the result: ${result}`)
        firstNum = result;
        //secondNum = displayValue;
        operatorType = type;
        console.log("You have pressed a second operator")
        console.log(`firstNum = ${firstNum}`, `secondNum = ${secondNum}`);
    } else if (firstNum === null && secondNum !== null) {
        console.log('Jesus work please');
        console.log(`firstNum = ${firstNum}`, `secondNum = ${secondNum}`);
    }
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
        if (num2 == 0) {
            result = "Nice try, pal"
            console.log('ZERO')
        } else result = parseFloat(result.toFixed(2));
    }
    displayValue = result;
    console.log(`${num1} ${op} ${num2} = ${result}`);
    console.log(firstNum, secondNum, operatorType)
    //displayValue = 0;
    firstNum = null;
    secondNum = null;
    //operatorType = null;
    changeDisplay();
    console.log(`${num1} ${op} ${num2} = ${result}`);
}



//After I press an operator I want the next number I press to be on the display. (Right now, the number gets concatenated)
//Figure out how to get display.innerText into a variable

//I don't want the decimals limited to 2 places. I want them to extend to the end of the calculator.
