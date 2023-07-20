let taskArray = [];
let inputTaskElememt = document.getElementById('js-input-task');
let inputDateElement = document.getElementById('js-input-date');
let addTaskElement = document.querySelector('.js-add-task-button');
let deleteTaskElement = document.querySelector('.js-delete-task-button');

addTaskElement.addEventListener('click', addEvent);



function addEvent() {
  let obj = {task: `${inputTaskElememt.value}`, date: `${inputDateElement.value}`};
  taskArray.push(obj);
  inputTaskElememt.value = '';
  inputDateElement.value = '';
  displayList();
}

function displayList () {
  
  let str = '';
  if(taskArray.length === 0){
    str = '';
  } else {
    taskArray.forEach((element,i)=> {
      str = str + `
      <div class="content">
        <p class = "para">${element.task}</p>
        <div class = "para-button">
          <p class = "para">${element.date}</p>
          <div class = "edit-remove-butto">
            <button class="button1" onclick = "
              editTask(${i});
            ">Edit</button>
            <button class="button1" onclick = "
              taskArray.splice(${i},1);
              displayList();
            ">Remove</button>
          </div>
        </div>
      </div>`
    });
  }
  document.querySelector('.js-container1').innerHTML = str;
}

function editTask(index) {
  inputTaskElememt.value = `${taskArray[index].task}`;
  inputDateElement.value = `${taskArray[index].date}`;

  let objectForEdit = {task: `${inputTaskElememt.value}`};
  taskArray[index].task = `${objectForEdit.task}`;
  taskArray[index].date = `${objectForEdit.date}`;
  taskArray.splice(index, 1);
  displayList();
}

