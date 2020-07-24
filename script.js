const calcScreen = document.querySelector('.calculator-screen');
const operators  = document.querySelectorAll('.operator');
const equalSign  = document.querySelector('.equal-sign');
const clearBtn   = document.querySelector('.all-clear');
const decimal    = document.querySelector('.decimal');
const numbers    = document.querySelectorAll('.number');

let prevNumber   = '';
let calcOperator = '';
let curNumber    = '0';

const updateScreen = (number) => {
    calcScreen.value = number;
};

const inputNumber = (number) => {
    if (curNumber === '0') {
        curNumber = number;
    } else {
        curNumber += number;
    }
};

const inputOperator = (operator) => {
    if (calcOperator === '') {
        prevNumber   = curNumber;
    }
    calcOperator = operator;
    curNumber    = '';
};

const clearAll = () => {
    prevNumber   = '';
    calcOperator = '';
    curNumber    = '0';
};

const inputDecimal = (dot) => {
    if (curNumber.includes('.')) return;
    curNumber += dot;
}

const calculate = () => {
    let result = '';
    switch (calcOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(curNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(curNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(curNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(curNumber);
            break;
        default:
            return;
    }
    curNumber = result;
    calcOperator = '';
};

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        // console.log(event.target.value);
        inputNumber(event.target.value);
        updateScreen(curNumber);

    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        // console.log(event.target.value);
        inputOperator(event.target.value);
    });
});

equalSign.addEventListener('click', (event) => {
    calculate();
    updateScreen(curNumber);
});

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(curNumber);
});

decimal.addEventListener('click', (event) => {
    // console.log(event.target.value);
    inputDecimal(event.target.value);

});