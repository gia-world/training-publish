"use strict"; // 왜??

//JS is synchronous.
//excute the code block by orger after hoisting
// hoisting : var, function declaration first!

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// ## Synchronous call back
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// ## Asynchronous call back
function printWidhtDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWidhtDelay(() => console.log("async callback"), 2000);

// ## callback hell example
class UserStroage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({
          name: "ellie",
          role: "admin",
        });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStroage = new UserStroage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStroage.loginUser(
  id,
  password,
  (user) => {
    userStroage.getRoles(
      user,
      (userWidthRole) => {
        alert(
          `Hello ${userWidthRole.name}, you have a ${userWidthRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
