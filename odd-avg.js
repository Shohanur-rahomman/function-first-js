// odd number average
function oddAvg(numbers) {
    let oddNumbers = [];//make a new array
    for (const number of numbers) {
        if (number % 2 === 1) {
            oddNumbers.push(number)
        }
    }
    // odd number sum 
    let sum = 0;
    for (const number of oddNumbers) {
        sum = sum + number;
    }
    // average
    const count = oddNumbers.length;
    const avg = sum / count;
    return avg;//result

}

const numbers = [12, 15, 56, 42, 19, 21];
const result = oddAvg(numbers)
console.log(result)