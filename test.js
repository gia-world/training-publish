const testFunction = () => {
  const randomNumber = Math.random() * 100;
  console.log(randomNumber);
};

testFunction();

for (let index = 0; index < 20; index++) {
  testFunction();
}
