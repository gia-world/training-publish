"use strict";

// Promise is a JS object for asynchronous operation.
// 비동기적인것을 수행할때 콜백 대신 사용할 수 있는
// 중요 1 state, 2 producer & consumer의 차이
// State : pending -> fulfilled / rejected
// Producer vs Consumer

// 1. Producer
// * when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read files)
  //(동기적으로 처리하면 그동안 시간이 걸리기 때문)
  console.log("doing sth..."); // 바로 실행됨
  setTimeout(() => {
    // resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value); // ellie,  resolve value of promise
  })
  .catch((error) => {
    console.log(error); // no network
  })
  .finally(() => {
    console.log("finally"); // 성공이든 실패든 상관없이 마지막에 무조건 수행됨
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
//then : 값을 바로 전달 / 혹은 프로미스를 바로 전달 가능
fetchNumber
  .then((num) => num * 2) //2
  .then((num) => num * 3) //6
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  }) //5
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error!! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  //   .then((hen) => getEgg(hen))
  //   .then((egg) => cook(egg))
  //   .then((meal) => console.log(meal));
  .then(getEgg)
  .catch((error) => {
    return "🥖"; // 계란을 받아오는데 실패하더라도 alternative를 추가
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
