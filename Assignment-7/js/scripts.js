//array
var tasks = [];

//task status enum
var taskStatus = {
  active: "active",
  completed: "completed"
}

function Task (id, name, status){
  this.id = id;
  this.name = name;
  this.status = status;
}

function addTaskElement(task){
  var listEl = document.getElementById("active-list");
  var taskEl = document.createElement("li");
  var textEl = document.createTextNode(task.name);

  //set attributes
  taskEl.setAttribute("id", task.id);

  //add text to task element
  taskEl.appendChild(textEl);

  //add task element to list
  listEl.appendChild(taskEl);
}

//click handler
function addTask(event){
  var inputEl = document.getElementById("input-task");
  if(inputEl.value !== ""){
    var id = "task-" + tasks.length;

    //create a new task
    var task = new Task(id, inputEl.value, taskStatus.active);
    tasks.push(task);

    //add task to DOM
    addTaskElement(task);

    //reset input
    inputEl.value = "";
  }
}

function init() {
  document.getElementById("add-task").onclick = addTask;
  console.log(event);
}

init();
