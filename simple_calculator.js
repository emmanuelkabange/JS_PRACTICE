document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    let operator = "";
    let previousInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.classList.contains("number")) {
                handleNumber(button.dataset.number);
            } else if (button.classList.contains("operator")) {
                handleOperator(button.dataset.operator);
            } else if (button.classList.contains("clear")) {
                handleClear();
            } else if (button.classList.contains("equals")) {
                handleEquals();
            }
        });
    });

    function handleNumber(number) {
        currentInput += number;
        display.value = currentInput;
    }

    function handleOperator(op) {
        if (currentInput === "") return;
        operator = op;
        previousInput = currentInput;
        currentInput = "";
        display.value = operator;
    }

    function handleClear() {
        currentInput = "";
        previousInput = "";
        operator = "";
        display.value = "";
    }

    function handleEquals() {
        if (currentInput === "" || previousInput === "" || operator === "") return;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        let result;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                return;
        }
        display.value = result;
        currentInput = result.toString();
        previousInput = "";
        operator = "";
    }
});
