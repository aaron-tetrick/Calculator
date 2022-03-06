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


plus.addEventListener('click', op);
clear.addEventListener('click', clearCalc);

equals.addEventListener('click', () => operate('+', 7, display.innerHTML))

let newNum;

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
}

//Holds the value that the user enters into calculator
function enterNum(num) {  
    if (display.textContent.length < 13) {
         newNum = display.innerHTML += num.innerHTML;
         console.log(newNum);
         return newNum;
    }
}


//Function when pressing operator
function op() {
    newNum = display.innerHTML
    console.log(newNum);
    return newNum
}

console.log(() => op());


/* 
Hi all!

I'm working on the Calculator project and am having trouble figuring out step #4. My enterNum function is returning the 'display value' in the calculator,
but I'm unsure how to access that value now. I think it is an issue with scope or maybe the event object?? I can't figure out how to call that information 
outside of the function.

If I try to console.log it outside the function it doesn't understand what 'event' I am referring to and gives an error.

Can someone point me in the direction of figuring out how to get the newNum variable out of the enterNum function, so I can use it for step #5? 
Is it a scope issue? Does it have to do with the function's event object? Am I headed in the right direction or am I completely off course?

*/

//Operates the equation and displays the result (Must use operate(op, num1, num2) as a result of clicking "=")


function operate(op, num1, num2) {
    //console.log(op, num1, num2);
    if (op === '+') {
    result = add(num1, num2);
    console.log(result)
    display.innerHTML = result;
    }
    else if (op = '-') {
        console.log(subtract(num1, num2));
    }
    else if (op = '*') {
        console.log(subtract(num1, num2));
    }
    else if (op = '/') {
        console.log(subtract(num1, num2));
    }
}



