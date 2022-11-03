function createHeader() {
    const header = document.createElement('header');
    
    const newBtn = document.createElement('button');
    newBtn.classList.add('create-btn');
    newBtn.textContent = '+ New';
    newBtn.addEventListener('click', () => {
        alert('button pressed');
    });

    header.appendChild(newBtn);

    return header;
}

function createTodo() {
    const card = document.createElement('section');
    card.classList.add('todo-card');

    card.textContent = 'Hello';

    return card;
}

function displayWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createTodo());

    return content;
}

export default displayWebsite;
