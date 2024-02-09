document.addEventListener('DOMContentLoaded', function() {
    const arrayTask = [];
    let checkedCheckboxes = [];

    function addTask() {
        const nameTask = document.querySelector('#nombre').value;

        if (nameTask.trim() !== '') {
            arrayTask.push({ task: nameTask, checked: false });
            document.querySelector('#nombre').value = '';
        
            updateTable();
            updateTaskCount();
            restoreCheckedCheckboxes(); // Restaurar el estado de los checkboxes marcados
        } else {
            document.getElementById('alerta').style.display = 'block';
            setTimeout(function() {
                document.getElementById('alerta').style.display = 'none';
            }, 3000);
        }
    }

    function updateTable() {
        const tableBody = document.querySelector('#tableTask tbody');
        tableBody.innerHTML = '';
        
        arrayTask.forEach((task, index) => {
            const row = document.createElement('tr');
    
            //Crear ID
            const idCell = document.createElement('td');
            idCell.textContent = index + 1; 
            row.appendChild(idCell);
            
            //Crear Crear Tarea
            const taskCell = document.createElement('td');
            taskCell.textContent = task.task;
            row.appendChild(taskCell);
    
            //Crear Checkbox
            const checkBoxCell = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.checked;
            checkBoxCell.appendChild(checkbox); 
            row.appendChild(checkBoxCell);
    
            //Crear icono Eliminar
            const trashCell = document.createElement('i');
            trashCell.classList.add("bi", "bi-x-circle");
            trashCell.id = "deleteIcon";
            row.appendChild(trashCell);
            trashCell.style.color = "red";
            trashCell.style.cursor = "pointer";
        
            //Actualizar Tabla
            tableBody.appendChild(row);
        });
    }


    function updateTaskCount(){
        const  taskCount = document.getElementById('taskCount');
        const count = arrayTask.length

        taskCount.textContent = `Total: ${count}`;
        updateTaskDone();
    }

    function updateTaskDone() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const countCheck = document.getElementById('taskDone').querySelector('span');
        
        let contador = 0;
        
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                contador++; 
            }
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    contador++; 
                } else {
                    contador--; 
                }
                countCheck.textContent = contador;
            });
        });
    
        countCheck.textContent = contador;
    }

    function deleteTask(taskIndex) {
        arrayTask.splice(taskIndex,1);
        updateTable();
        updateTaskCount();
    }
    
  
    document.querySelector('#tableTask tbody').addEventListener('click', function(e) {
        if (e.target.classList.contains('bi-x-circle')) {
            const rowToDelete = e.target.closest('tr');
            const rowIndex = rowToDelete.rowIndex - 1;
            deleteTask(rowIndex);
            rowToDelete.remove();
        }
    });
            
    document.getElementById('nombre').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    document.getElementById('btnTask').addEventListener('click', function() {
        addTask();
    });

    // Función para restaurar el estado de los checkboxes marcados
    function restoreCheckedCheckboxes() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox, index) => {
            if (checkedCheckboxes.includes(index)) {
                checkbox.checked = true;
            }
        });
    }
});
