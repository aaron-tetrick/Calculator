const result = document.getElementById("result");
const nums = document.querySelectorAll(".num");
const clear = document.querySelector(".clear")

console.log(clear);

console.log(nums[0]);
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


function newResult(e) {
    result.textContent += e.textContent;
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

function clearCalc() {
    result.textContent = '';
}
