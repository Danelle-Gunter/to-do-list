const TodoFactory = () => {

    const createTodoInDom = () => {
        const card = document.createElement('article');
        card.classList.add('todo-card');

        card.textContent = 'Lorem ipsum dolor sit amet...';

        return card;
    };

    return {createTodoInDom};
}

export default TodoFactory;