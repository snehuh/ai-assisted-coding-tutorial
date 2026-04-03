//todo app with add, remove, and list functions
const todos = [];

function addTodo(todo) {
    todos.push(todo);
}

function removeTodo(index) {
    todos.splice(index, 1);
}

function listTodos() {
    console.log('Todo List:');
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}
