//import deleteTodo from './todoActions';

const TodoFactory = (userInput) => {

    const createTodoInDom = () => {
        const card = document.createElement('article');
        card.classList.add('todo-card');
        const todoId = Date.now();
        card.setAttribute('id', todoId);

        const userNote = document.createElement('p');
        userNote.classList.add('user-note');
        userNote.textContent = `${userInput}`;
        userNote.addEventListener('click', () => {
            alert('clicked card');
        });

        const ckBox = document.createElement('input');
        ckBox.setAttribute('type', 'checkbox');
        ckBox.addEventListener('change', () => {
            card.classList.toggle('completed');
        });

        card.appendChild(userNote);
        card.appendChild(ckBox);

        return card;
    };

    return {createTodoInDom};
}

export default TodoFactory;