// it should have a place to store todos
const todos = ['item1'];

// it should have a function to Read todos
function readTodos() {
  console.log(todos);
}

// it should have a function to Create a todo
function createTodo(newItem) {
  todos.push(newItem);
  readTodos();
}

// it should have a function to Update a todo
function updateTodo(position, newText) {
  todos[position] = newText;
  readTodos();
}

// it should have a function to Delete a todo
function deleteTodo(position) {
  todos.splice(position, 1);
  readTodos();
}