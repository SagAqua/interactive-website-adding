const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector('.todo-nr b');
const mainTitle =document.querySelector('.main-title');
const nameInput = document.querySelector('.name-input');

const items = todoList.children;

button.addEventListener('click', function(e) {
    e.preventDefault()
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = nameInput.value;
    todoList.appendChild(newItem);
    todoNr.innerText = items.length;
    nameInput.value= "";
    newItem.addEventListener('click',deleteItem)
});

for (item of items) {
    item.addEventListener('click', deleteItem)
}

function deleteItem(e){
    e.stopPropagation();
    e.target.remove();
}
todoList.addEventListener('click', function(){
    todoList.classList.toggle('fade');
})


// button.addEventListener("keydown", function(event){
// if(event.keyCode === 81){
//     mainTitle.classList.add('color')
// }
// })
