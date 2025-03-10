function totalSalary(employees) {
    let salary = 0;
    for (const employee of employees) {
        salary += employee.starting + (employee.experience * employee.increment);

    }
    return salary;
}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const newSalary = totalSalary(employees);
let result = newSalary / 12;
let newResult = parseFloat(result.toFixed(2));
console.log(newResult);

