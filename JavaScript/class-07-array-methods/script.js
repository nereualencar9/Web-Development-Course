// map (inmutable) *

const numbers = [10, 20, 30];
console.log(numbers.map((num) => num + 5));
console.log(numbers.map((num) => num * 5.74));

const devs = [
    {name: "Nereu", salary: 6.500},
    {name: "Fred", salary: 5.800},
    {name: "Neemias", salary: 7.000},
];

const newSalaries = devs.map((dev) => dev.salary * 1.1);
console.log(newSalaries);

console.log(devs);

