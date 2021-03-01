let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("To-Do-container");
let inputField = document.getElementById("input-field");

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.innerText = '> ' + inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through white';
    })
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })

})