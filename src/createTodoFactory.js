import deleteTodo from './todoActions';

const TodoFactory = (userInput) => {

    const createTodoInDom = () => {
        const card = document.createElement('article');
        card.classList.add('todo-card');
        const todoId = Date.now();
        card.setAttribute('id', todoId);

        const userNote = document.createElement('p');
        userNote.textContent = `${userInput}`;

        const delBtn = document.createElement('button');
        delBtn.classList.add('del-btn');
        delBtn.textContent = 'DEL';
        delBtn.addEventListener('click', () => {
            deleteTodo();
        });

        card.appendChild(userNote);
        card.appendChild(delBtn);

        return card;
    };

    return {createTodoInDom};
}

export default TodoFactory;