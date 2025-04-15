document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const todoInput = document.getElementById('todoInput');

    if (todoInput.value.trim() === '') return;

    const todoList = document.getElementById('todoList');


    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    listItem.textContent = todoInput.value;


    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.textContent = 'УДАЛИТЬ';


    deleteButton.addEventListener('click', function() {

        listItem.style.animation = 'fall 0.5s forwards';
        setTimeout(() => {
            todoList.removeChild(listItem);
        }, 500);
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
    todoInput.value = '';
});