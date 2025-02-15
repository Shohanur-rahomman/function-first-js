function addCalculator(num1, num2) {
    const total = num1 + num2;
    return total;
}
function subtract(num1, num2) {
    const total = num1 - num2;
    return total;
}
function multiply(num1, num2) {
    const total = num1 * num2;
    return total;
}
function divisible(num1, num2) {
    const total = num1 / num2;
    return total;
}

function calculator(num1, num2, operation) {
    if (operation === 'add') {
        const result = addCalculator(num1, num2);
        return result;
    }
    else if (operation === 'subtract') {
        const result = subtract(num1, num2);
        return result;
    }
    else if (operation === 'multiply') {
        const result = multiply(num1, num2);
        return result;
    }
    else if (operation === 'divisible'){
        const result = divisible(num1,num2)
        return result;
    }
    else{
        return 'pleas input correct';
    }
}

const result = calculator(10,10,'multiply');
console.log(result);
