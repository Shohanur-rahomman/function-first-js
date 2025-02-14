// miles to km
function milesToKilometer(miles) {
    const kilometer = miles * 1.60934;
    return kilometer;
}

const result = milesToKilometer(5);
console.log(result, 'km');

function miles(km) {
    const milesKm = km * 0.621371;
    return milesKm;
}

const resultMiles = miles(50);
console.log(resultMiles, 'miles');

// inch to fit
function rollsOfInch (inch){
    const fitToInch = inch / 12;
    const fitNumber = parseInt(fitToInch);
    const fitInch = inch % 12;
    const result = fitNumber + ' fit ' + fitInch + ' inch';
    return result; 
}

const joy = rollsOfInch(75);
console.log(joy);