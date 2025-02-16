function myArray(numbers) {
    const minNumber = Math.min(...numbers);
    return minNumber;
}


const heights2 = [167, 190, 120, 165, 137];

const result1 = myArray(heights2);
console.log(result1);

// version 2
const heights1 = [167, 190, 120, 165, 137];
const smallNumber = Math.min(...heights2);
console.log(smallNumber);

// version 1
function smallName(name) {
    name.sort()
    return name[0];
}

const heights3 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const result = smallName(heights3);
console.log(result);

function smallName(names) {
    let sortName = names[0];
    for (let i = 1; i < names.length; i++) {
        if(names[i] < sortName){
            sortName=names[i];
        }
    }
    return sortName;
}

const heights4 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const result2 = smallName(heights3);
console.log(result);