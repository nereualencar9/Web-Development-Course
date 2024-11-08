// Avaliação JavaScript

// Questão 1 (Data Types):

// Declare as seguntes variáveis e atribua os valores por tipo:
// Sting, Number, Boolean, Function, Array, Object

const string = "Nereu Alencar";
let number = 1;
let boolean = true;
let addFunction = () => 1 + 1;

function addNumbers() {
  return 1 + 1;
}

let array = [1, "A", [1, 2, 3]];

const object = {
  name: "Nereu Alencar",
  age: 43,
};

// Questão 2 (Operators):

// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 2 e 3 e raiz quadrada de 144

console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(2 ** 3);
console.log(4 % 2);
console.log(144 ** (1 / 2));
console.log(Math.sqrt(144));

// Questão 3 (Functions):

// Crie e execute uma função de nome "concat" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno

function concat(text) {
  return "javasript" + text;
}

console.log(concat("JS"));

// return "JavaScript" + arg

// Questão 4 (Data Manipulation):

// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro

const series = ["Game of Thornes", "Rick and Morty", "Os Simpsons"];
series.push("The Walking Dead");
series.shift();
series.unshift("La casa de papel");
series.splice(0, 1, "Family Guy");

console.log(series);

// Questão 5 (for):

// Liste todos os valores do array criado na questão anterior ultilizando o for

for (let i = 0; i < series.length; i++) {
  console.log(series[i]);
}

// Questão 6 (while):

// Escreva os números de 0 a 100 sem os que pertencem à familía do 40, do 50 e do 60

let count = 0; // flag
while (count < 100) {
  count++; // container
  if (count >= 40 && count <= 69) {
    continue;
  } else {
    console.log(count);
  }
}

// Questão 7 (if):

//Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa (quando estiver inferior à metade da máxima
// A velocidade da pista é de 60km/h

const speed = 80;
const max = 60;

if (speed > max) {
  console.log("O Rachador");
} else if (speed < max / 2) {
  console.log("Sai do meio Pé-de pano");
} else {
  console.log("Rê rê  rê  rê  rê;  rê rê rê rê");
}

// Questão 8 (array methods):

//Uma empresa vai dar 10% de aumento para seus funcionários
//Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

const mewSalaries = salary.map((salary) => salary * 1.1);
console.log(mewSalaries);
