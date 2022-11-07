import TodoFactory from './createTodoFactory';
import formProcessing from './form';

function createHeader() {
    const header = document.createElement('header');
    
    const form = document.createElement('form');
    //form.setAttribute('action', 'form.js');
    form.setAttribute('method', 'post');
    form.setAttribute('id', 'form');

    const formInput = document.createElement('input');
    formInput.setAttribute('type', 'text');
    formInput.setAttribute('placeholder', 'Type note here...');
    formInput.setAttribute('id', 'form-input');
    formInput.setAttribute('name', 'form-input');
    formInput.classList.add('formInput');

    const newBtn = document.createElement('button');
    newBtn.classList.add('new-btn');
    newBtn.setAttribute('type', 'submit');
    newBtn.textContent = '+ New';
    newBtn.addEventListener('click', e => {
        e.preventDefault();
        const fi = document.querySelector('#form-input').value.trim();
        formProcessing(fi);
        //createTodo();
    });

    form.appendChild(formInput);
    form.appendChild(newBtn);

    header.appendChild(form);

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
