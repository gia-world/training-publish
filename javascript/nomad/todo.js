const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
  //   console.dir(event.target);
  //   console.log(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanTodos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  //filter() : run function through every item in array and make new array with the condition "true"
  //   console.log(cleanTodos);
  toDos = cleanTodos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  //   console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // console.log(loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    // console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      //   console.log(toDo.text);
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
