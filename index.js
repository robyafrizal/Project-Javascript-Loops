let iteration = 5;

do {
  console.log(`Bilangan kelipatan 5 dibawah 100 adalah  ${iteration}`);
  iteration += 5;
} while (iteration < 100);

console.log("----------Next Sample----------");

for (let index = 7; index <= 100; index += 7) {
  console.warn(`Bilangan kelipatan 3 dibawah 100 adalah ${index}`);
}

console.log("----------Next Sample----------");

const number = [2, 5, 7, 10, 11, 14, 18, 20, 25, 29];
for (let i = 0; i < number.length; i++)
  console.log(`Isi dari variable number adalah ${number[i]}`);

console.log("----------Next Sample----------");

let a = 4;
let result = 1;

for (let i = 0; i < a; i++) {
  result = result * (a - i);
}
console.log(`Hasil Faktorial ${a} adalah ${result}`);

console.log("----------Next Sample----------");

let input = "yourName";
let reverseName = "lakeah";

let output = input
  .split("")
  .reverse()
  .join("");
console.log(output);

let output1 = reverseName
  .split("")
  .reverse()
  .join("");
console.log(output1);
