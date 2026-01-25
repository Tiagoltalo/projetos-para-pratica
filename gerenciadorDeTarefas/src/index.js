let taskArea = document.querySelector("#task");

// Closure que armazena o estado da variável itemNumber
function closureTask() {
    let itemNumber = 0;

    // Função para adicionar uma nova tarefa
    function addTask() {
        let taskInput = document.querySelector("input");
    
        taskArea.innerHTML += `
            <li id="${itemNumber}">
                ${taskInput.value}
                
                <div class="actions">
                    <button class="complete" onclick="completeTask(${itemNumber})">✓</button>
                    <button class="delete" onclick="deleteTask(${itemNumber})">X</button>
                </div>
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

function completeTask(itemNumber) {
    let itemTask = document.getElementById(itemNumber);
    setTimeout(() => itemTask.remove(), 5000)
}


let item = closureTask();