document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const todoInput = document.getElementById('todoInput');

    if (todoInput.value.trim() === '') return;

    const todoList = document.getElementById('todoList');

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';


    const taskText = document.createElement('span');
    taskText.textContent = todoInput.value;


    const statusText = document.createElement('span');
    statusText.className = 'badge badge-info ml-2';
    statusText.textContent = 'Нужно сделать'; // Начальный статус

    listItem.appendChild(taskText);
    listItem.appendChild(statusText);


    const editButton = document.createElement('button');
    editButton.className = 'btn btn-warning btn-sm mx-2';
    editButton.textContent = 'ИЗМЕНИТЬ';

    editButton.addEventListener('click', function() {
        const newTaskText = prompt("Введите новый текст задачи:", taskText.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskText.textContent = newTaskText;
        }
    });


    const statusButton = document.createElement('button');
    statusButton.className = 'btn btn-info btn-sm mx-2';
    statusButton.textContent = 'СТАТУС';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    statusButton.addEventListener('click', function() {
        const currentStatus = statusText.textContent;
        let newStatus;

        if (currentStatus === 'Нужно сделать') {
            newStatus = 'В процессе';
        } else if (currentStatus === 'В процессе') {
            newStatus = 'Выполнено';
        } else {
            newStatus = 'Нужно сделать';
        }

        statusText.textContent = newStatus;


        if (newStatus === 'Выполнено') {
            statusText.className = 'badge badge-success ml-2';
        } else if (newStatus === 'В процессе') {
            statusText.className = 'badge badge-warning ml-2';
        } else {
            statusText.className = 'badge badge-info ml-2';
        }

    });


    deleteButton.textContent = 'УДАЛИТЬ';

    deleteButton.addEventListener('click', function() {
        listItem.style.animation = 'fall 0.5s forwards';
        setTimeout(() => {
            todoList.removeChild(listItem);
        }, 500);
    });

    listItem.appendChild(statusButton);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    todoInput.value = '';
});