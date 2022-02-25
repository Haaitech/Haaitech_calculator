const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const allClearButton = document.querySelector("[data-all-clear]");
const equalsButton = document.querySelector("[data-equals]");
const piButton = document.querySelector("[data-pi]");
const rootButton = document.querySelector("[data-root]");
const powerButton = document.querySelector("[data-power]");
let previousValueTextElement = document.querySelector("[data-previous-value]");
let currentValueTextElement = document.querySelector("[data-current-value]");

let previousValue = "";
let currentValue = "";
let previousValueText = "";
let currentValueText = "";
let opperationvar = "";
let answer = null;

//---------------- Eventlisteners -------------------
numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const number = button.innerHTML;
		appendNumber(number);
	});
});
operationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const opperation = button.innerHTML;
		chooseOperation(opperation);
	});
});

allClearButton.addEventListener("click", clear);

equalsButton.addEventListener("click", compute);

piButton.addEventListener("click", () => {
	currentValue = Math.PI.toFixed(4);
	currentValueText = "&#960;";
	updateDisplay();
});

rootButton.addEventListener("click", () => {
	opperationvar = "&radic;";
	currentValueText = currentValueText.concat("&radic;");
	updateDisplay();
});
powerButton.addEventListener("click", () => {
	opperationvar = "x&sup2;";
	currentValueText = currentValueText.concat("&sup2;");
	updateDisplay();
});

//-------------- Functions -------------------
function clear() {
	previousValueTextElement.innerHTML = "";
	currentValueTextElement.innerHTML = "";
	previousValue = "";
	currentValue = "";
	opperationvar = "";
	previousValueText = "";
	currentValueText = "";
	answer = null;
}

// function deleteCharacter() {}

function appendNumber(number) {
	currentValue = currentValue.concat(number);
	currentValueText = currentValueText.concat(number);
	updateDisplay();
}

function chooseOperation(operation) {
	previousValue = currentValue;
	previousValueText = currentValueText;
	opperationvar = operation;
	currentValue = "";
	currentValueText = "";
	updateDisplay();
}

function compute() {
	switch (opperationvar) {
		case "":
			answer = currentValue;
			updateDisplay();
			break;
		case "+":
			answer = Number(previousValue) + Number(currentValue);
			updateDisplay();
			break;
		case "-":
			answer = Number(previousValue) - Number(currentValue);
			updateDisplay();
			break;
		case "x":
			answer = Number(previousValue) * Number(currentValue);
			updateDisplay();
			break;
		case "/":
			answer = Number(previousValue) / Number(currentValue);
			updateDisplay();
			break;
		case "&radic;":
			answer = Math.sqrt(Number(currentValue));
			opperationvar = "";
			updateDisplay();
			break;
		case "x&sup2;":
			answer = Math.pow(Number(currentValue), 2);
			opperationvar = "";
			updateDisplay();
			break;
		default:
			break;
	}
}

function updateDisplay() {
	if (answer) {
		answer = Math.round(answer * 1000) / 1000;
		previousValueTextElement.innerHTML =
			previousValueText + " " + opperationvar + " " + currentValueText + " =";
		currentValueTextElement.innerHTML = answer;
		currentValue = answer;
		currentValueText = answer;
		answer = null;
	} else if (opperationvar === "&radic;" || "x&sup2;") {
		currentValueTextElement.innerHTML = currentValueText;
	} else {
		previousValueTextElement.innerHTML =
			previousValueText + " " + opperationvar;
		currentValueTextElement.innerHTML = currentValueText;
	}
}
