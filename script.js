window.addEventListener('DOMContentLoaded',() =>{
    const form = document.querySelector('.todo-form');
    const input = document.querySelector('.task-form');
    const list_todo = document.querySelector('.todo-list');

    form.addEventListener('submit', (p) =>{
        p.preventDefault();

        const todo = input.value;

        if (!todo) {
            alert("please fill out the todo");
            return;
        } 

        const todo_el = document.createElement('div')
        todo_el.classList.add('todo')
        const todo_content = document.createElement('div')
        todo_content.classList.add('todo-list')

        todo_el.appendChild(todo_content);
        

    })

})