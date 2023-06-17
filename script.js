window.addEventListener('DOMContentLoaded',() =>{
    const form_box = document.querySelector('.todo-form');
    const input = document.querySelector('.form');
    const todo_li = document.querySelector('.todo-list');

    form_box.addEventListener('submit', (p) =>{
        p.preventDefault();

        const todo = input.value;

        if (!todo) {
            alert("please fill out the todo");
            return;
        } 

        // here we have created the CONTENT div 
        const todo_el = document.createElement('div')
        todo_el.classList.add('content')

        // here we have created the child CONTENT of the div 
        const content_input = document.createElement('input');
        content_input.type = 'text';
        content_input.classList.add('create-todo');
        content_input.placeholder = 'todos';
        content_input.setAttribute('readonly', 'readonly');

        // appended the child of the CONTENT 
        todo_el.appendChild(content_input);
        

    })

})