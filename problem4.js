function finalScore(input) {
    if (typeof input !== 'object') {
        return 'Invalid Input';
    }
    if (typeof input.name !== 'string' ||
        typeof input.greatScore !== 'number' ||
        typeof input.schoolScore !== 'number' ||
        typeof input.isFamily !== 'boolean') {
        return 'Invalid Input';
    }
    let score = input.greatScore + input.schoolScore;
    if (input.isFamily) {
        score += 20;
    }
    if (score >= 80) {
        return true;
    }
    return false;
}

const result = finalScore({
    name: 'rakib',
    greatScore: 41,
    schoolScore: 30,
    isFamily: true
})
console.log(result);