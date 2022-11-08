const TodoFactory = (userInput) => {

    const createTodoInDom = () => {
        const card = document.createElement('article');
        card.classList.add('todo-card');

        card.textContent = `${userInput}`;

        return card;
    };

    return {createTodoInDom};
}

export default TodoFactory;