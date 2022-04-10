"use strict";

// ## callback hell example
class UserStorage {
  // loginUser(id, password) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (
  //         (id === "ellie" && password === "dream") ||
  //         (id === "coder" && password === "academy")
  //       ) {
  //         resolve(id);
  //       } else {
  //         reject(new Error("not found"));
  //       }
  //     }, 2000);
  //   });
  // }
  // getRoles(user) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (user === "ellie") {
  //         resolve({
  //           name: "ellie",
  //           role: "admin",
  //         });
  //       } else {
  //         reject(new Error("no access"));
  //       }
  //     }, 1000);
  //   });
  // }

  async loginUser(id, password) {
    if (
      (id === "ellie" && password === "dream") ||
      (id === "coder" && password === "academy")
    ) {
      return id;
    } else {
      throw "not found";
    }
  }

  async getRoles(user) {
    if (user === "ellie") {
      return {
        name: "ellie",
        role: "admin",
      };
    } else {
      throw "no access";
    }
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
// userStroage
//   .loginUser(id, password)
//   // .then(user=>userStroage.getRoles)
//   .then(userStroage.getRoles)
//   .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
//   .catch(console.log);

async function getUserInfo() {
  //   return Promise.all([
  //     userStroage.loginUser(id, password),
  //     userStroage.getRoles(id),
  //   ]).then((users) =>
  //     alert(`hello ${users[1].name}, you have a ${users[1].role} role`)
  //   );
  const userInfo = await userStorage.loginUser(id, password); // loginUser not defined 왜???
  const userRoles = await userStorage.getRoles(loginUser);
  return `hello ${userInfo.name}, you have a ${userRoles.role} role`;
}
getUserInfo().then(console.log).catch(console.log);

// userStroage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStroage.getRoles(
//       user,
//       (userWidthRole) => {
//         alert(
//           `Hello ${userWidthRole.name}, you have a ${userWidthRole.role} role`
//         );
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );
