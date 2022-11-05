import TodoFactory from './createTodoFactory';

function createHeader() {
    const header = document.createElement('header');
    
    const newBtn = document.createElement('button');
    newBtn.classList.add('new-btn');
    newBtn.textContent = '+ New';
    newBtn.addEventListener('click', () => {
        createTodo();
    });

    header.appendChild(newBtn);

    return header;
}

function createTodo() {
    const newTodo = TodoFactory();
    const content = document.getElementById('content');
    content.appendChild(newTodo.createTodoInDom());
}

function displayWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());

    return content;
}

export default displayWebsite;
