// flag
let count = 0;
while (count < 20) {
  count += 1;

  if (count >= 3 && count <= 7) {
    continue;
    break;
  }

  if (count % 2 == 0) {
    console.log(count);
  }
}

for (let count = 0; count <= 20; count++) {
  console.log(count);
}

const students = [
  { name: "Pelé", n1: 7, n2: 8 },
  { name: "Vinicius Jr", n1: 8, n2: 6 },
  { name: "Mané Garrincha", n1: 5, n2: 6 },
  { name: "Kross", n1: 9.1, n2: 10 },
];

for (let i = 0; i < students.length; i++) {
  const avg = (students[i].n1 + students[i].n2) / 2;

  if (avg >= 7) {
    console.log(`${students[i].name} aprovado com média ${avg}`);
  } else {
    console.log(`${students[i].name} reprovado com média ${avg}`);
  }
}

console.log("End!");

const numbers = [];

while (numbers.length < 6) {
  const draw = Math.ceil(Math.random() * 60);
  const numberFormatted = String(draw).padStart(2, 0);

  if (numbers.includes(numberFormatted)) {
    continue;
  } else {
    numbers.push(numberFormatted);
  }
}

console.log(numbers.sort((a, b) => a - b).join("-"));
