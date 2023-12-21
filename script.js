function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function appendDecimal() {
    if (!document.getElementById('display').value.includes('.')) {
        document.getElementById('display').value += '.';
    }
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function convertToBinary() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = Number(result).toString(2);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function convertToHex() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = Number(result).toString(16).toUpperCase();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function convertToOctal() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = Number(result).toString(8);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
