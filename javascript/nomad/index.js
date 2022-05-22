// alert('Im working, Im js');
// console.log('Im working, Im js');

// ## data type

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

// ## function and argument

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

// ## DOM, modifying

console.log(document);

// const title = document.getElementById("title");
const title = document.querySelector("#title");
console.log(title);

title.innerHTML = "Hi! from JS";
// title.style.color = "green";
console.dir(title);
// console.dir(document);
document.title = "i own you now";

// ## event

function handleResize(event) {
  // console.log("Ive been resized");
  console.log(event);
}
// window.addEventListener("resize", handleResize()); // call the function immedietly
window.addEventListener("resize", handleResize); // call the function when you need it
/*
function handleClick() {
  title.style.color = "brown";
}
*/

// title.addEventListener("click", handleClick);

// ## if
/*
if ("10" === 10) {
  console.log("yes");
} else {
  console.log("no");
}

if (20 > 5 && "nico" === "nico") {
  // both of them = true
  console.log("yes");
} else {
  console.log("no");
}

const age = prompt("How old are you?");
// console.log(age);
if (age < 18) {
  console.log("you cant drink");
} else if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else {
  console.log("you can drink");
}
*/

/*
// ## DOM if function practice
const BASE_COLOR = "pink";
const OTHER_COLOR = "tomato";

function handleClick2() {
  // title.style.color=""
  const currentColor = title.style.color;
  // console.log(currentColor);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick2);
}
init();
*/

// event example
function handleOffline() {
  console.log("Bye bye");
}
function handleOnline() {
  console.log("welcome Back");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

//

const CLICKED_CLASS = "clicked";
function handleClick() {
  // const currentClass = title.className;
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (hasClass) {
  //   title.classList.remove(CLICKED_CLASS);
  // } else {
  //   title.classList.add(CLICKED_CLASS);
  // }
  title.classList.toggle(CLICKED_CLASS);
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
