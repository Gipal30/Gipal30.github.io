// Function to Append Values to Display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to Clear Display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to Delete the Last Character (Backspace)
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to Calculate Result
function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        alert("Invalid expression");
    }
}