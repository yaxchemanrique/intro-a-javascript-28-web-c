const input = document.getElementById('task-content');
const button = document.getElementById('add-button');
const inboxSection = document.querySelector('#inbox');

function addToInbox() {
    const taskContent = input.value;
    if(taskContent !== ''){
        const task = document.createElement('p');
        // task.textContent = taskContent;
        task.innerHTML = `<span>${taskContent}</span> <button class="delete-button">x</button>`;
        inboxSection.appendChild(task);
        input.value = '';

        let deleteButton = document.getElementsByClassName('delete-button');
        for (let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].addEventListener('click', 
            
        function deleteTask(event) {
            // console.log(event.target.parentNode);
            // const span = event.target.parentNode;
            inboxSection.removeChild(task);
        });
            
        }
        

    } else {
        alert('Ingresa una tarea válida');
    }
}

button.addEventListener('click', addToInbox);




