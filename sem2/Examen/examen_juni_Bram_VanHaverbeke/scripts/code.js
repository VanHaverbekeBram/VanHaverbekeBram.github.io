let tasks = [];
let countHides = 0;
const setup = () =>{
    let newTask = document.getElementById("new");
    newTask.addEventListener("click", makeFormVisible);
    let save = document.getElementById("save");
    save.addEventListener("click", valideer);
    let cancel = document.getElementById("cancel");
    cancel.addEventListener("click", emptyForm);
    let deleteAll = document.getElementById("clearAll");
    deleteAll.addEventListener("click", clearAll);
    let hide = document.getElementById("hideExpired");
    hide.addEventListener("click", hideExpired);
    let sort = document.getElementById("orderByDate");
    sort.addEventListener("click", orderByDate);
    localLoad();
}

class Task {
    title;
    date;
    note;
    constructor(title, date, note) {
        this.title = title;
        this.date = date;
        if (note === ""){
            note = "-";
        }else {
            this.note = note;
        }
    }
}

const makeFormVisible = () =>{
    let newTask = document.getElementById("new");
    newTask.className = "hidden";
    let form = document.getElementsByClassName("form");
    form[0].className = "form";
}

const makeFormInisible = () =>{
    let newTask = document.getElementById("new");
    newTask.className = "";
    let form = document.getElementsByClassName("form");
    form[0].className = "form hidden";
}

const valideer = () =>{
    let title = document.getElementById("title");
    let date = document.getElementById("endDate");
    let fouten = 0;
    if (title.value === ""){
        title.className = "invalid";
        fouten++;
    }
    if (date.value === ""){
        date.className = "invalid";
        fouten++;
    }
    if (fouten === 0){
        saveTask();
    }
}

const emptyForm = () =>{
    let title = document.getElementById("title");
    let date = document.getElementById("endDate");
    let note = document.getElementById("notes");
    title.value = "";
    date.value = "";
    note.value = "";
}

const saveTask = () =>{
    let title = document.getElementById("title");
    let date = document.getElementById("endDate");
    let note = document.getElementById("notes");
    let task = new Task(title.value, date.value, note.value);
    placeTask(task);
    tasks.push(task);
    localSave();
    makeFormInisible();
}

const placeTask = (task) => {
    let main = document.getElementById("todos");
    let div = document.createElement("div");
    div.className = "todo";
    if (Date.parse(task.date) < Date.now()){
        div.className = "todo expired";
    }
    let h2 = document.createElement("h2");
    h2.textContent = task.title;
    let h3 = document.createElement("h3");
    h3.textContent = task.date;
    let p = document.createElement("p");
    if (task.note === ""){
        p.textContent = "-";
    }else {
        p.textContent = task.note;
    }
    let button = document.createElement("button");
    button.textContent = "Markeer als afgerond";
    button.addEventListener("click", finishTask);
    main.appendChild(div);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);
}

const finishTask = (event) => {
    let task = event.target.parentElement
    tasks.splice(tasks.indexOf(task), 1);
    task.remove();
    localSave();
}

const localSave = () => {
  let savedTasks = JSON.stringify(tasks);
  localStorage.setItem("examen.tasks", savedTasks);
}

const localLoad = () => {
  let savedTasks = localStorage.getItem("examen.tasks");
  if (savedTasks !== null){
      tasks = JSON.parse(savedTasks);
      tasks.forEach(function (s){
          placeTask(s);
      })
  }
}

const clearAll = () => {
    if (confirm("Ben je zeker dat je alle taken wilt wissen?") === true){
        let cards = document.getElementsByClassName("todo");
        let length = cards.length;
        for (let i = 0; i < length; i++) {
            cards[0].remove();
        }
        tasks = [];
        localSave();
    }
}

const hideExpired = () => {
    let divTasks = document.getElementsByClassName("todo");
    if (countHides %2 === 0){
        for (let i = 0; i < divTasks.length; i++) {
            if (Date.parse(divTasks[i].children[1].textContent) < Date.now()){
                divTasks[i].className = "todo hidden";
            }
        }
    }else {
        for (let i = 0; i < divTasks.length; i++) {
            if (Date.parse(divTasks[i].children[1].textContent) < Date.now()){
                divTasks[i].className = "todo expired";

            }
        }
    }
    countHides++;
}

const orderByDate = () => {
    console.log(tasks);
    tasks.sort();
    console.log(tasks);
}

window.addEventListener("load", setup);