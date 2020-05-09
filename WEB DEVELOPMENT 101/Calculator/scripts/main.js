
let firstLine = false;
let storedValue;
let resetInput = true;
let lastOperation = null;

// OPERATIONS
const ADD = 'add';
const SUBTRACT = 'subtract';
const MULTIPLY = 'multiply';
const DIVIDE = 'divide';

// INPUT
const lastOperationInput = document.getElementById("lastOperation");
const input = document.getElementById("textInput");

// ALLOWED KEYBOARD ACTIONS
const allowedKeys = ['Enter', '+', '-', '*', '/', 'Backspace', 'Escape'];


function add() {
    if (arguments.length != 2) {
        throw new Error(`function needs two arguments, had ${arguments.length}`);
    }
    const result = parseInt(arguments[0]) + parseInt(arguments[1]);
    return result;
}

function subtract() {
    if (arguments.length != 2) {
        throw new Error(`function needs two arguments, had ${arguments.length}`);
    }
    return arguments[0] - arguments[1];
}

function multiply() {
    if (arguments.length != 2) {
        throw new Error(`function needs two arguments, had ${arguments.length}`);
    }
    return arguments[0] * arguments[1];
}

function divide() {
    if (arguments.length != 2) {
        throw new Error(`function needs two arguments, had ${arguments.length}`);
    }

    if (parseInt(arguments[1] == 0)) {
        throw new Error(`User tried to divide with 0`);
    }

    return arguments[0] / arguments[1];
}

function operate() {
    if (lastOperation == null || resetInput == true) {
        return
    } else {
        if (lastOperation == ADD) {
            let result = add(storedValue, input.value);
            input.value = parseFloat(result.toFixed(5));
        } else if (lastOperation == SUBTRACT) {
            let result = subtract(storedValue, input.value);
            input.value = parseFloat(result.toFixed(5));
        } else if (lastOperation == MULTIPLY) {
            result = multiply(storedValue, input.value);
            input.value = parseFloat(result.toFixed(5));
        } else if (lastOperation == DIVIDE) {
            result = divide(storedValue, input.value);
            input.value = parseFloat(result.toFixed(5));
        }
        storedValue = input.value;
        updateOperationInput();
    }
   
    resetInput = true;
}


function resetCalculator() {
    firstLine = false;
    storedValue;
    resetInput = true;
    lastOperation = null;
    input.value = '';
    updateOperationInput();
}

function updateOperationInput() {
    if(lastOperation == null) {
        lastOperationInput.value = '';
    } else if (lastOperation == ADD) {
        lastOperationInput.value = '+';
    } else if (lastOperation == SUBTRACT) {
        lastOperationInput.value = '-';
    } else if (lastOperation == MULTIPLY) {
        lastOperationInput.value = '×';
    } else if (lastOperation == DIVIDE) {
        lastOperationInput.value = '÷';
    }

}

function OperationKeyPress(whichAction) {
    if (lastOperation == null) {
        lastOperation = whichAction;
        updateOperationInput();
        storedValue = input.value;
        resetInput = true;
    } else {
        operate();
        lastOperation = whichAction;
        updateOperationInput();
    }
}

function addKeys() {
    const numberKeys = document.querySelectorAll(".number");
    const numberKeysArray = Array.from(numberKeys);

    numberKeysArray.map(number => {
        number.addEventListener('click', function() {
            if (resetInput) {
                input.value = number.id;
                resetInput = false;
                return;
            }
            
            if (input.value.charAt(0) == '0' && !input.value.includes('.')) {
                input.value = number.id;
                return;
            }

            input.value = input.value + number.id;
        });
    });

    const dot = document.getElementById("dot");
    dot.addEventListener('click', function() {
        if (resetInput) {
            input.value = '0.';
            resetInput = false;
            return
        } else if (input.value.includes('.')) {
            return
        };
        input.value = input.value + '.';

    });

    const addBtn = document.getElementById("add");
    addBtn.addEventListener('click', OperationKeyPress.bind(null, ADD));

    const subtractBtn = document.getElementById("subtract");
    subtractBtn.addEventListener('click', OperationKeyPress.bind(null, SUBTRACT));
   
    const multiplyBtn = document.getElementById("multiply");
    multiplyBtn.addEventListener('click', OperationKeyPress.bind(null, MULTIPLY));

    const divideBtn = document.getElementById("divide");
    divideBtn.addEventListener('click', OperationKeyPress.bind(null, DIVIDE));

    const escapeBtn = document.getElementById("reset");
    escapeBtn.addEventListener('click', function() {
        resetCalculator();
    });

    const equalsBtn = document.getElementById("equals");
    equalsBtn.addEventListener('click', function() {
        operate();
        lastOperation = null;
        storedValue = 0;
        resetInput = true;
        updateOperationInput();
    });

    const deleteBtn = document.getElementById("delete");
    deleteBtn.addEventListener('click', function() {
        if (resetInput) {
            input.value = '';
        } else {
        let str = input.value;
        str = str.slice(0, -1);
        input.value = str;
        }
    });

    const plusminusBtn = document.getElementById("plusminus");
    plusminusBtn.addEventListener('click', function() {
        let str = input.value;
        if (parseInt(str) < 0) {
            input.value = str.substring(1);
        } else if (parseInt(str) > 0) {
            input.value = '-' + str;
        }

        if (resetInput) {
            storedValue = input.value;
        }
    })
}

function playKey(e) {
    let key;
    console.log(input.value);
    if (parseInt(e.key) || e.key == '0') {
        key = document.querySelector(`.number[data-key="${e.key}"]`)
    } else if (allowedKeys.includes(e.key)) {
        key = document.querySelector(`.action[data-key="${e.key}"]`)
    } else if (e.key == '.') {
        key = document.getElementById('dot');
    } else {
        return;
    };

    key.click();
}

addKeys();
window.addEventListener('keydown', playKey);
