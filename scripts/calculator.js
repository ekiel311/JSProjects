let set;
let result;
let display = document.querySelector("#calc-input");

// Clear Button
function clearInput() {
    display.value = "";
    set = "";
}

function calcBtn(numPress) {
    if (display.value == 0) {
        display.value = "";
        display.value = numPress;
        set = numPress;
    } else {
        display.value = display.value + numPress;
        set = set + numPress;
    }
}

function plus() {
    display.value = display.value + "+";
    set = set + "+";
}

function minus() {
    display.value = display.value + "-";
    set = set + "-";
}

function times() {
    display.value = display.value + "x";
    set = set + "*";
}

function dividedBy() {
    display.value = display.value + "÷";
    set = set + "/";
}

function equals() {
    try {
        result = eval(set);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid operation");
        }
        display.value = result;
    } catch (error) {
        if (error instanceof SyntaxError || error.message === "Invalid operation") {
            display.value = "Error";
        } else if (error instanceof TypeError && error.message === "Division by zero") {
            display.value = "Cannot divide by 0";
        } else {
            console.error(error);
            display.value = "Error";
        }
    }
}
