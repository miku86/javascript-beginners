const todoList = {
  // it should have a place to store todos
  todos: [],

  // it should have a object method to Read todos
  // readTodos should show if todos are empty
  // readTodos should show the todo text
  // readTodos should show the todo status
  readTodos() {
    if (this.todos.length) {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].isCompleted) {
          console.log(`(x) ${this.todos[i].todoText}`);
        } else {
          console.log(`( ) ${this.todos[i].todoText}`);
        }
      }
    } else {
      console.log('No Todos.');
    }
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
  },

  // it should make every todo false, if every todo is true
  // it should make every todo true, if not every todo is true
  toggleAll() {
    var completedTodos = 0;

    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].isCompleted) {
        completedTodos += 1;
      }
    }

    if (this.todos.length === completedTodos) {
      for (var i = 0; i < this.todos.length; i++) {
        this.todos[i].isCompleted = false;
      }
    } else {
      for (var i = 0; i < this.todos.length; i++) {
        this.todos[i].isCompleted = true;
      }
    }

    this.readTodos();
  }
};

const handlers = {
  readTodos() {
    todoList.readTodos();
  },
  createTodo() {
    const inputField = document.querySelector('.create-todo-input');
    const newValue = inputField.value;
    todoList.createTodo(newValue);
    inputField.value = '';
  },
  updateTodoText() {
    const positionField = document.querySelector('.update-todo-text-position');
    const position = positionField.value - 1;
    const newTextField = document.querySelector('.update-todo-text-new-text');
    const newText = newTextField.value;
    todoList.updateTodoText(position, newText);
    positionField.value = '';
    newTextField.value = '';
  },
  deleteTodo() {
    const positionField = document.querySelector('.delete-todo-position');
    const position = positionField.value - 1;
    todoList.deleteTodo(position);
    positionField.value = '';
  },
  toggleTodoStatus() {
    const positionField = document.querySelector(
      '.toggle-todo-status-position'
    );
    const position = positionField.value - 1;
    todoList.toggleTodoStatus(position);
    positionField.value = '';
  },
  toggleAll() {
    todoList.toggleAll();
  }
};

const setupHandlers = () => {
  const displayTodosButton = document.querySelector(".display-todos-button");
  displayTodosButton.addEventListener("click", handlers.readTodos);

  const toggleTodosButton = document.querySelector(".toggle-todos-button");
  toggleTodosButton.addEventListener("click", handlers.toggleAll);

  const createTodoButton = document.querySelector(".add-todo-button");
  createTodoButton.addEventListener("click", handlers.createTodo);

  const updateTodoButton = document.querySelector(".update-todo-button");
  updateTodoButton.addEventListener("click", handlers.updateTodoText);

  const toggleTodoButton = document.querySelector(".toggle-todo-button");
  toggleTodoButton.addEventListener("click", handlers.toggleTodoStatus);

  const deleteTodoButton = document.querySelector(".delete-todo-button");
  deleteTodoButton.addEventListener("click", handlers.deleteTodo);
}

setupHandlers();