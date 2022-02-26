// alert('Im working, Im js');
// console.log('Im working, Im js');

const daysOfWeek = ["mon", "tue", "wed"];
console.log(daysOfWeek[2]); //wed

const info = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovies: ["along the gods", "LOTR", "old boy"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "cheese burger", fatty: true },
  ],
};

console.log(info.gender); //Male
console.log(info.favFood[0].fatty); //false

console.log(console);

function sayHello(potato, chicken) {
  //   console.log("hello", potato, " you have ", chicken, "years of age.");
  console.log("hello" + potato + " you have " + chicken + " years of age.");
}

sayHello("Nick", 15);

//

// function sayHello2(name, age) {
//   console.log(`Hello ${name}, you are ${age} years old`);
// }
// const greeting = sayHello2("Nick", 24); //equivalant to return value
// console.log(greeting); //undefined

function sayHello2(name, age) {
  return `Hello ${name}, you are ${age} years old`;
}
const greeting = sayHello2("Nick", 24);
console.log(greeting);

//

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};
const plus = calculator.plus(5, 5);
console.log(plus);
console.log(calculator.minus(5, 5));
console.log(calculator.multiply(5, 5));
console.log(calculator.divide(5, 5));

//

console.log(document);

// const title = document.getElementById("title");
const title = document.querySelector("#title");
console.log(title);

title.innerHTML = "Hi! from JS";
title.style.color = "green";
console.dir(title);
// console.dir(document);
document.title = "i own you now";
