let addToButton= document.getElementById("addToDo");
let removeButton = document.getElementById("remove");
let inputField = document.getElementById("inputField");
let toDoContainer = document.getElementById("toDoContainer");

addToButton.addEventListener("click",function(){
    let paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.classList.add('paragraph-styling');
} );

removeButton.addEventListener("click",function(){
    while (toDoContainer.firstChild) { toDoContainer.removeChild(toDoContainer.firstChild); }
})

inputField.addEventListener('keyup', function(event) { if (event.key === 'Enter') { event.preventDefault(); document.getElementById('addToDo').click(); }})