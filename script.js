window.addEventListener('load',() =>{
    const form_box = document.querySelector('.todo-form');
    const input = document.querySelector('.form');
    const todo_li = document.querySelector('.todo-list');

    form_box.addEventListener('submit', (e) =>{
        e.preventDefault();

        const todo = input.value;
        
        if (!todo) {
            alert("please fill out the todo");
            return;
        } 

        // here we have created the CONTENT div 
        const todo_el = document.createElement('div')
        todo_el.classList.add('content-list')
        todo_li.appendChild(todo_el)

        // here we have created the div of the content 
        const content_div = document.createElement('div');
        content_div.classList.add('content');
        todo_el.appendChild(content_div);


        // here we have created the child CONTENT of the div 
        const content_input = document.createElement('input');
        content_input.type = 'text';
        content_input.classList.add('create-todo');
        content_input.placeholder = 'todos';
        content_input.setAttribute('readonly', 'readonly');

        // appended the child of the CONTENT 
        content_div.appendChild(content_input);

        // create the edit button element 
        const btn_edit_action = document.createElement('button')
        btn_edit_action.classList.add('edit-btn')
        btn_edit_action.type = 'button'
        btn_edit_action.innerText = "Edit"
        
        content_div.appendChild(btn_edit_action);
        // create the delete button 
        const btn_dlt_action = document.createElement('button')
        btn_dlt_action.classList.add('delete')
        btn_dlt_action.innerText = "Delete"
        btn_dlt_action.type = 'button';
        //  append child edit and delete button 

        content_div.appendChild(btn_dlt_action);
        
        input.value = '';

        btn_edit_action.addEventListener = ('click',(e) =>{
            if (btn_edit_action.innerText.toLowerCase() == 'edit'){
                btn_edit_action.innerText = "save"
                content_input.removeAttribute('readonly')
                content_input.focus();  
            }
            else {
                btn_edit_action.innerText ='edit'
                content_input.setAttribute('readonly','readonly');
            }
        });
        btn_dlt_action.addEventListener('click',(e) => {
            todo_li.remove(content_div);
        });
    });

})