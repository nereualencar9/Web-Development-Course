let myName = "Nereu Alencar"; // string
let age = 43; // number
const cpf = "123"; // string
let isAdmin = true; // boolean

myName = "Nereu Alencar";
// cpf = "outra coisa";

console.log(myName);
console.log(cpf)
console.log(isAdmin)

console.log(typeof myName)
console.log(typeof cpf)
console.log(typeof isAdmin)

document.write("Bem vindo, " + myName);
console.log(myName + 1) // type coercion
console.log(Number("2") + 3); // Type coversion 
console.log(typeof Number("2"));
console.log(typeof String(age));

// template literals (string)
console.log(`Meu nome é ${myName} e tenho ${age} anos`);

