
let firstLine = false;
let storedValue;
let resetLine = true;
let lastOperation;

// OPERATIONS
const ADD = 'add';
const SUBTRACT = 'subtract';
const MULTIPLY = 'multiply';
const DIVIDE = 'divide';

// INPUT
const input = document.getElementById("textInput");



function add() {
    if (arguments.length != 2) {
        throw new Error(`function needs two arguments, had ${arguments.length}`);
    }
    console.log("adding " + arguments[0] + " and " + arguments[1]);
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
    return arguments[0] / arguments[1];
}

function operate() {
    if (!lastOperation) return;

    if (lastOperation = ADD) {
        input.value = add(storedValue, input.value);
        lastOperation = null;
    }

}


function addKeyPresses() {
    const numberKeys = document.querySelectorAll(".number");
    const numberKeysArray = Array.from(numberKeys);

    numberKeysArray.map(number => {
        number.addEventListener('click', function() {
            if (resetLine) {
                input.value = number.id;
                resetLine = false;
                return;
            }
            input.value = input.value + number.id;
        });
    });

    /// START SCRIBBLING FROM HERE
    const addBtn = document.getElementById("add");
    addBtn.addEventListener('click', function() {
        if (!lastOperation) {
            lastOperation = ADD;
        }
        
        lastOperation = ADD;
        

    })

    const equalsBtn = document.getElementById("equals");
    equalsBtn.addEventListener('click', function() {
        if (lastOperation == 'add') {
            input.value = add(storedValue, input.value);
            storedValue = 0;
        }
    });

    const deleteBtn = document.getElementById("delete");
    addBtn.addEventListener('click', function() {
        lastOperation = '';
        storedValue = input.value;
    })
}

function evaluate() {



}

addKeyPresses();
// const input = document.getElementById("textInput");
// input.value = "hello";
