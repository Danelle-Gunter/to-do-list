import TodoFactory from './createTodoFactory';
import formProcessing from './form';

function createForm() {
    const form = document.createElement('form');
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
        let fi = document.querySelector('#form-input');
        let processFi = fi.value.trim();
        createTodo(formProcessing(processFi));
        fi.value = '';
    });

    form.appendChild(formInput);
    form.appendChild(newBtn);

    return form;
}

function createHeader() {
    const header = document.createElement('header');
    header.appendChild(createForm());

    return header;
}

function createTodo(uInput) {
    const newTodo = TodoFactory(uInput);
    const section = document.getElementById('container');
    section.appendChild(newTodo.createTodoInDom());
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

function displayWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createSection());
    content.appendChild(createFooter());

    return content;
}

export default displayWebsite;
