//* async & await
//* clear style of using promise => syntatic sugar!!

//* 1. async
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     //imagine : do network request in 10 secs...
//     // return 'ellie' // promise:pending
//     resolve("ellie"); //promise:fulfilled
//   });
// }
async function fetchUser() {
  return "ellie";
}
// new promise를 적지 않아도 프로미스처럼 작동 = 프로미스를 만드는 함수

const user = fetchUser();
user.then(console.log);
console.log(user);

//* 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getApple() {
  // await은 async 함수 안에서만 사용 가능
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple}+${banana}`);
//   });
// } // 콜백 지옥!! (프로미스의 잦은 중첩)

async function pickFruits() {
  //   const apple = await getApple(); //1초 딜레이
  //   const banana = await getBanana(); //1초 딜레이 총 2초
  const applePromise = getApple(); // 프로미스를 만드는 순간 코드블럭이 바로 실행됨
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise; // 두개의 await가 동시에 작동 => await 병렬
  return `${apple}+${banana}`;
}

pickFruits().then(console.log);

//* 3. useful Promise APIs
function pickAllFruits() {
  //all : 병렬적으로 await를 수행해 배열로 받음
  return Promise.all([getApple(), getBanana()]).then(
    (fruits) => fruits.join("+") // 그 배열을 스트링으로
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  //가장 먼저 값을 리턴하는 것만 전달
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
