let Allinput = document.querySelectorAll('.input')
let output = document.getElementById('output')
Allinput.forEach(inputElm => {
    inputElm.addEventListener('mousedown', function (e) {

        console.log("e.target.className: ", e.target.className);
        onTheMoveElm = e.target;
    })
});
allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(boxElm => {

    boxElm.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
        if (event.target.className === "box") {
            event.target.classList.add("box-dropable")
        }
    });
    boxElm.addEventListener("dragleave", (event) => {
        event.preventDefault();
        if (event.target.className.includes("box")) {
            event.target.classList.remove("box-dropable")
        }
    });
    boxElm.addEventListener('drop', function (e) {
        if (e.target.className.includes("box")) {
            e.target.appendChild(onTheMoveElm);
            e.target.classList.remove("box-dropable")
        }
    });
});

let todos = []
function addInp() {
    Allinput.forEach(function (e) {
        let value = e.value;
        e.value = '';
        todos.push(value)
        console.log(value)
    })
    for (let i = 0; i < todos.length; i++) {
        output.innerHTML += `<input type="text" draggable="true" class="input" value="${todos[i]}">`
        todos = []
        console.log("- " + todos[i]);
    }
}

