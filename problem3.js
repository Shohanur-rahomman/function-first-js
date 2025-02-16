function stringValidation(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }

    let character = false;//why this one asaind out sit
    for (let i = 0; i < name.length; i++) {
        let char = name[i];//why i use for loop insitd why no assi out sit
        if (!isNaN(char) && char !== ' ') {
            character = true;
            break;//why i use break if i use return then what happen
        }
    }
    return character;
}
const result = stringValidation();
console.log(result);

function userNameValidation(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }
    
    for (let i = 0; i < name.length; i++) {
        const cher = name[i];
        if (!isNaN(cher) && cher !== '') {
            return true;  
        }
    }
    return false;
}

const result1 = userNameValidation('');
console.log(result1);