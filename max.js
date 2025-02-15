// normal max number of conditional
const jim = 110;
const tim = 80;
const kim = 70;

if (jim > tim && jim > kim) {
    console.log('jim is boss');
}
else if (tim > jim && tim > kim) {
    console.log('tim is the boss');
}
else {
    console.log('kim is the boss');
}

// max number of function conditional
function maxBoss(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log('boss', num1);
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        console.log('boss', num2);
        return num2
    }
    else {
        console.log('boss', num3);
        return num3
    }
}
const max = maxBoss(50, 40, 60);
console.log(max);

// function max number of array
function arrMax(...number) {
    const max = Math.max(...number)
    return max;
}
const number = arrMax(10, 20, 30, 40, 50, 8, 25, 82);
console.log(number);
// max number of array
const numbers = [10, 20, 30, 40, 50];
const topMaxNumber = Math.max(...numbers);
console.log(topMaxNumber);
// min number of array
const minNumbers = [10, 20, 30, 40, 50];
const minNumber = Math.min(...minNumbers)
console.log(minNumber);
// array max number
const myArray = [10, 20, 30, 40];

function myArrayMax(numbers) {
    let arrayMax = numbers[0];
    for (const num of numbers) {
        if (num > arrayMax) {
            arrayMax = num;
        }
    }
    return arrayMax;
}

const arrayResult = myArrayMax(myArray);
console.log(arrayResult);
