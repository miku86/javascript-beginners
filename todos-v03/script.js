const todoList = {
  // it should have a place to store todos
  todos: [],

  // it should have an object method to Read todos
  readTodos() {
    console.log(this.todos);
  },

  // it should have an object method to Create a todo
  createTodo(newValue) {
    this.todos.push(newValue);
    this.readTodos();
  },

  // it should have an object method to Update a todo
  updateTodo(position, newValue) {
    this.todos[position] = newValue;
    this.readTodos();
  },

  // it should have an object method to Delete a todo
  deleteTodo(position) {
    this.todos.splice(position, 1);
    this.readTodos();
  }
};