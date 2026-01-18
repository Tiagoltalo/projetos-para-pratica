let taskArea = document.querySelector("#task");

// Closure que armazena o estado da variável itemNumber
function task() {
    let itemNumber = 0;

    // Função para adicionar uma nova tarefa
    function addTask() {
        let taskInput = document.querySelector("input");
    
        taskArea.innerHTML += `
            <li id="${itemNumber}">
                ${taskInput.value}
                <button class="delete" onclick="deleteTask(${itemNumber})">X</button>
            </li>
        `;
    
        itemNumber++;
        taskInput.value = "";
    };

    return addTask;
}

// Função para deletar uma tarefa
function deleteTask(itemNumber) {
    let itemTask = document.getElementById(itemNumber);
    itemTask.remove();
};

let item = task();