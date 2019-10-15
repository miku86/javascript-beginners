const todoList = {
  // it should have a place to store todos
  todos: [],

  // it should have a object method to Read todos
  readTodos() {
    console.log(this.todos);
  },

  // it should have an object method to Create a todo as an object
  createTodo(newValue) {
    const newTodo = {
      todoText: newValue,
      isCompleted: false
    };
    this.todos.push(newTodo);
    this.readTodos();
  },

  // it should have an object method to Update a todo text
  updateTodoText(position, newText) {
    this.todos[position].todoText = newText;
    this.readTodos();
  },

  // it should have a object method to Delete a todo
  deleteTodo(position) {
    this.todos.splice(position, 1);
    this.readTodos();
  },

  // it should have an object method to Toggle a todo completed status
  toggleTodoStatus(position) {
    this.todos[position].isCompleted = !this.todos[position].isCompleted;
    this.readTodos();
  }
};