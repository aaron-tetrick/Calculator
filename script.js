const result = document.getElementById("result");
const nums = document.querySelectorAll(".num");
const clear = document.querySelector("#clear");
const equals = document.querySelector('#equals');
const plus = document.querySelector('#plus');
const sub = document.querySelector('#sub');
const multi = document.querySelector('#multi');
const div = document.querySelector('#div');




nums[0].addEventListener('click', () => enterNum(nums[0]))
nums[1].addEventListener('click', () => enterNum(nums[1]))
nums[2].addEventListener('click', () => enterNum(nums[2]))
nums[3].addEventListener('click', () => enterNum(nums[3]))
nums[4].addEventListener('click', () => enterNum(nums[4]))
nums[5].addEventListener('click', () => enterNum(nums[5]))
nums[6].addEventListener('click', () => enterNum(nums[6]))
nums[7].addEventListener('click', () => enterNum(nums[7]))
nums[8].addEventListener('click', () => enterNum(nums[8]))
nums[9].addEventListener('click', () => enterNum(nums[9]))
//plus.addEventListener('click', )
clear.addEventListener('click', clearCalc);


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

//Clears the Calculator
function clearCalc() {
    result.textContent = '';
}

//Holds the value that the user enters into calculator
function enterNum(e) {
    let newNum = '';
    if (result.textContent.length < 13) {
         newNum = result.textContent += e.textContent;
         console.log(newNum);
         return newNum;
    }
}

console.log(enterNum)


//Operates the equation and displays the result (Must use operate(op, num1, num2) as a result of clicking "=")
function operate(op, num1, num2) {
    console.log(op, num1, num2);
    if (op === '+') {
    console.log(add(num1, num2))
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


console.log(result.textContent);



