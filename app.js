let todoInput = document.getElementById('todo-input');
let output = document.getElementById('output');
let addTodoBtn = document.querySelector('.todo-btn');
let onTheMoveElm;

addTodoBtn.addEventListener('click', function addTask() {
    let taskValue = todoInput.value.trim();
    if (!taskValue) {
        alert('Please Enter Your Task')
    } else {
        let newTask = document.createElement('input');
        newTask.type = 'text';
        newTask.draggable = true;
        newTask.classList.add('input');
        newTask.value = taskValue;
        todoInput.value = '';  // Clear input field
        output.appendChild(newTask);

        addDragAndDropListeners(newTask);
    }
})



function addDragAndDropListeners(task) {
    task.addEventListener('mousedown', function (e) {
        onTheMoveElm = e.target;
    });

    let allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach(boxElm => {
        boxElm.addEventListener("dragover", (event) => {
            event.preventDefault();
            if (event.target.className === "box") {
                event.target.classList.add("box-dropable");
            }
        });

        boxElm.addEventListener("dragleave", (event) => {
            event.preventDefault();
            if (event.target.className.includes("box")) {
                event.target.classList.remove("box-dropable");
            }
        });

        boxElm.addEventListener('drop', function (e) {
            if (e.target.className.includes("box")) {
                e.target.appendChild(onTheMoveElm);
                e.target.classList.remove("box-dropable");
            }
        });
    });
}
