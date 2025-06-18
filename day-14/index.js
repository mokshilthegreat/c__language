//Q-1

let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Q-2

let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//Q-3

// let str = "Hello, World!";


// for (let i = 0; i < str.length; i++) {
// for(let length=0;length < str.length;i++){

// }
// }

// console.log(length);

//Q-4

let str = "JavaScript";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}


//Q-5


let m = 0;
for (let j =1;j<=5;j++){
m += j;
}
    console.log(m)
//Q-6

const num = [3, 1, 4, 1, 5, 9];
let max = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}

console.log(" Q-6  Maximum value:", max);

//Q-7

let array2 = [1,2,3,4,5]
for(let i =array2.length;i>=0;i--){
    console.log(array2[i])
}
//Q-8
let greeting = "hello";

for (let i = 0; i < greeting.length; i++) {
  console.log(greeting[i].toUpperCase());
}

//Q-9


//Q-10

const d = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < d.length; i++) {
  if (d[i] % 2 == 0) {
    console.log(d[i]);
  }
}
//Q-11

//Q-12
let fruits = ["apple", "banana", "cherry"];
let totalLength = 0;

for (let i = 0; i < fruits.length; i++) {
  totalLength += fruits[i].length;
}

console.log("Total length :", totalLength);


//Q-13

const e = ["This", "is", "JavaScript"];

let ans = "";

for (let i = 0; i < e.length; i++) {
  ans += e[i]; 
}

console.log(ans);


// //Q:- 3,9,11,14 & 15

