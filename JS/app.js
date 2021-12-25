const numberButtons = document.querySelectorAll(["data-number"]);
const operationButtons = document.querySelectorAll(["data-operation"]);
const equalsButton = document.querySelector(["data-equals"]);
const rootButton = document.querySelector(["data-root"]);
const powerButton = document.querySelector(["data-power"]);
const piButton = document.querySelector(["data-pi"]);
const previousOperandTextElement = document.querySelector(
	"[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
	"[data-current-operand]"
);

class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}
}
