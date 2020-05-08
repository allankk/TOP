function add() {
	const argArray = Array.from(arguments);

	const sum = argArray.reduce((total, amt) => total + amt);

	return sum;
}

function subtract () {
	const argArray = Array.from(arguments);
	
	const subtract = argArray.reduce((total, amt) => total - amt);

	return subtract;
}

function sum () {
	if (arguments[0].length == 0) return 0;

	const sum = arguments[0].reduce((total, amt) => total + amt);

	return sum;
}

function multiply () {
	if (arguments[0].length == 0) return 0;

	const result = arguments[0].reduce((total, current) => total * current);
	
	return result;
}

function power() {
	return Math.pow(arguments[0], arguments[1]);	
}

function factorial() {
	if (arguments[0] == 0 || arguments[0] == 1) return 1;

	let i = arguments[0] - 1;
	let result = arguments[0];

	for (i; i>0; i--){
		result = result * i;
	}
	
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
