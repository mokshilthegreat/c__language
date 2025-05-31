// let count = 0
// for(let i=1;i<=4;i++ ){
//    for(let j=1;j<=8;j++ ){
//     count++
// }
// }

// console.log(count)

//Q-1
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

//Q-2
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// Q-3

let num = 5;
let fact = 1;
for (let i = num; i > 0; i--) {
  fact *= i;
}
console.log(fact);
// Q-4

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
  } else if (i % 3 == 0) {
    console.log("Fizz", i);
  } else if (i % 5 == 0) {
    console.log("Buzz", i);
  }
}

// Q-5

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// Q-6

for (let i = 1; i <= 10; i++) {
  console.log(` ${i} = ${i ** 3}`);
}

// Q-7
// let Sum =0;
// for (let i = 1; i <= 20; i += 2) {
//   console.log("Q-7",i);
//     Sum += i * i;
// }

//Q-8
let odd = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    odd += i;
  }
}

console.log("Q-8", sum);

//Q-9
let product = 1;

for (let i = 1; i <= 10; i++) {
  product *= i;
}

console.log("Q-9", product);

//While Loop Questions:
//Q-10
let i = 10;

while (i >= 1) {
  console.log("Q-10", i);
  i--;
}

//Q-11

let doubling = 1;
while (doubling <=1000){
  doubling *=2;
}
console.log("Q-11",doubling)

//Q-12

let a = 0;
let number = 1;

while (number <= 100) {
  if (number % 2 === 0) {
    a += number;
  }
  number++;
}

console.log("Q-12", sum);

