/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

/* Function Expression - Subtract Numbers */
function Subtract(number1, number2){
    return number1 - number2;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtracNumbers)

function subtracNumbers(){
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = Subtract(subNumber1, subNumber2);
}

/* Arrow Function - Multiply Numbers */

const Multiply = (fact1, fact2)=>{
    return fact1 * fact2
}



const multiplyNumbers = ()=>{
    let factNumber1 = Number(document.querySelector('#factor1').value);
    let factNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = Multiply(factNumber1, factNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */

const Divide = (dividend, divisor)=>{
    return dividend/ divisor
}

const divideNumbers = ()=>{
    let dividendNumber = Number(document.querySelector('#dividend').value);
    let divisorNumber = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = Divide(dividendNumber, divisorNumber);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)


/* Decision Structure */

document.querySelector('#getTotal').addEventListener('click', getTotal);
const checkbox = document.getElementById('member');

function discount(subTotal){
    let Total;
    let memberDiscount = 0

    if (checkbox.checked) {
        memberDiscount = subTotal * 0.2
        Total= subTotal - memberDiscount
    }
    else{
        Total = subTotal
    }

    return Total.toFixed(2)
}

function getTotal(){
    let subTotal = Number(document.querySelector('#subtotal').value);
    let totalSpan = document.querySelector('#total'); 
    totalSpan.textContent = discount(subTotal); 
}

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = numbersArray

/* Output Odds Only Array */
let notPair = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = notPair


/* Output Evens Only Array */
let pair = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = pair;

/* Output Sum of Org. Array */
let sum = numbersArray.reduce((sum, number)=> sum + number);
document.getElementById('sumOfArray').textContent = sum;


/* Output Multiplied by 2 Array */

let multiply = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multiply;

/* Output Sum of Multiplied by 2 Array */

let sumOfMultiplied = multiply.reduce((sum, number)=> sum + number);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
