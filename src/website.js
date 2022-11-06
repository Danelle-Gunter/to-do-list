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

function createSection() {
    const section = document.createElement('section');
    section.setAttribute('id', 'container');

    return section;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'Footer stuff goes here';

    return footer;
}

function createTodo() {
    const newTodo = TodoFactory();
    const section = document.getElementById('container');
    section.appendChild(newTodo.createTodoInDom());
}

function displayWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createSection());
    content.appendChild(createFooter());

    return content;
}

export default displayWebsite;
