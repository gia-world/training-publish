// fetch 연습
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//poke api 불러오기
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  //   .then(console.log) // response 출력
  // body : 타겟 데이터, 리스폰스에서 바로 접속할수 없음.
  .then((res) => res.json())
  // 19번째 줄 주석 처리 안하면 아래 에러 발생, 이유?
  // Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'json')
  .then((data) => console.log(data));

fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  .then((response) => response.json())
  .then((allpokemon) => console.log(allpokemon));

function getPokemon() {
  const pokemon = fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  ).then((response) => response.json());
  // .then((data) => console.log(data));
  // return pokemon;
  // 이 data를 어떻게 return 해야하는지..?

  // -> 화살표 함수에 대한 이해 부족!
  //33번 줄의 (response) => response.json() 은
  // (response) => {return response.json()} 과 같다.
}

getPokemon().then(console.log);
