function incomeText(income, expand) {
    if (typeof income !== 'number' || income < 0 || typeof expand !== 'number' || expand < 0) {
        return 'Invalid Number'
    }
    const totalMoney = income - expand;
    const text = totalMoney / 100 * 20;
    return text;
}

const result = incomeText(34000,1753);
console.log(result);