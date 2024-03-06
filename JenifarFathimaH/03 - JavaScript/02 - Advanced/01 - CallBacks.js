

function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b;
}

function calculate(a, b, operation, callback) {
    const result = operation(a, b);
    callback(result);
}

function displayResult(result) {
    console.log("The result is:", result);
}

calculate(5, 3, add, displayResult); 
calculate(10, 4, subtract, displayResult); 
