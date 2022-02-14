const result = document.getElementById("result");
const nums = document.querySelectorAll(".num");
const clear = document.querySelector("#clear");
const equals = document.querySelector('#equals');
const plus = document.querySelector('#plus');
const sub = document.querySelector('#sub');
const multi = document.querySelector('#multi');
const div = document.querySelector('#div');




nums[0].addEventListener('click', () => newResult(nums[0]))
nums[1].addEventListener('click', () => newResult(nums[1]))
nums[2].addEventListener('click', () => newResult(nums[2]))
nums[3].addEventListener('click', () => newResult(nums[3]))
nums[4].addEventListener('click', () => newResult(nums[4]))
nums[5].addEventListener('click', () => newResult(nums[5]))
nums[6].addEventListener('click', () => newResult(nums[6]))
nums[7].addEventListener('click', () => newResult(nums[7]))
nums[8].addEventListener('click', () => newResult(nums[8]))
nums[9].addEventListener('click', () => newResult(nums[9]))
clear.addEventListener('click', clearCalc);


//I need to figure out how to transfer an event handler function into another function

//I want to run the operate function when the user presses '='
function operate(op, num1, num2) {
    console.log(op, num1, num2);
    if (op = '+') {
    console.log(add(num1, num2))
    }
    if (op = '-') {
        console.log(subtract(num1, num2));
    }
}


function newResult(e) {
    let newNum = '';
    if (result.textContent.length < 13) {
         newNum = result.textContent += e.textContent;
         console.log(result.textContent);
         return newNum;
    }
}

let newNum = newResult;
console.log(newNum);


console.log(result.textContent);


//Various math operator functions
function add(num1, num2) {
    let value = Number(num1) + Number(num2);
    return value;
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

function clearCalc() {
    result.textContent = '';
}
