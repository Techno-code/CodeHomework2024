document.getElementById('addTaskButton').addEventListener('click', function() {
    const input = document.getElementById('newTaskInput');
    const newTask = input.value.trim();

    if (newTask) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const text = document.createTextNode(' ' + newTask);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.onclick = function() {
            listItem.remove();
        };

        checkbox.onchange = function() {
            if (checkbox.checked) {
                listItem.style.textDecoration = 'line-through';
            } else {
                listItem.style.textDecoration = 'none';
            }
        };

        listItem.appendChild(checkbox);
        listItem.appendChild(text);
        listItem.appendChild(deleteButton);
        document.getElementById('tasksList').appendChild(listItem);

        input.value = '';  // Clear input after adding
    }
});