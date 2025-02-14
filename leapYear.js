// normal leap year 99.99 ok

function leapYear1(year) {
    if (year % 4 === 0) {
        return true
    }
    else {
        return false;
    }
}
const result1 = leapYear1(2000);
console.log(result1);

// leap year okj
function leapYear2(year) {
    if (year % 100 !== 0 && year === 4) {
        return true;
    }
    else if (year % 100 === 0 && year % 400) {
        return true;
    }
    else {
        return false;
    }
}
const result2 = leapYear2(2000);
console.log(result2);
