import './App.css';

function App() {
  const name="Tom";
  // const user={
  //   name:"Jane"
  // }
  const naver ={
    name: '네이버',
    url:"https://naver.com"
  }
  return (
    <div className="App">
      <h1 style={{
        color:"yellowgreen",
        backgroundColor:"green"
      }}>
        Hello, {name}.
        <p>{2+3}</p>
       {/*  <p>{user}</p>  not working */}
        </h1>
        <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
