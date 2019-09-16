const todoList = {
  // it should have a place to store todos
  todos: [],

  // it should have an object method to Create a todo as an object
  createTodo(newValue) {
    const newTodo = {
      todoText: newValue,
      isCompleted: false
    };
    this.todos.push(newTodo);
  },

  // it should have an object method to Update a todo text
  updateTodoText(position, newText) {
    this.todos[position].todoText = newText;
  },

  // it should have a object method to Delete a todo
  deleteTodo(position) {
    this.todos.splice(position, 1);
  },

  // it should have an object method to Toggle a todo completed status
  toggleTodoStatus(position) {
    this.todos[position].isCompleted = !this.todos[position].isCompleted;
  },

  // it should make every todo false, if every todo is true
  // it should make every todo true, if not every todo is true
  toggleAll() {
    var completedTodos = 0;

    this.todos.forEach((todo) => {
      if (todo.isCompleted) {
        completedTodos += 1;
      }
    });

    this.todos.forEach((todo) => {
      if (this.todos.length === completedTodos) {
        todo.isCompleted = false;
      } else {
        todo.isCompleted = true;
      }
    });
  }
};

const handlers = {
  createTodo() {
    const inputField = document.querySelector('.create-todo-input');
    const newValue = inputField.value;
    todoList.createTodo(newValue);
    inputField.value = '';
    view.readTodos();
  },

  updateTodoText() {
    const positionField = document.querySelector('.update-todo-text-position');
    const position = positionField.value - 1;
    const newTextField = document.querySelector('.update-todo-text-new-text');
    const newText = newTextField.value;
    todoList.updateTodoText(position, newText);
    positionField.value = '';
    newTextField.value = '';
    view.readTodos();
  },

  deleteTodo(position) {
    todoList.deleteTodo(position);
    view.readTodos();
  },

  toggleTodoStatus() {
    const positionField = document.querySelector(
      '.toggle-todo-status-position'
    );
    const position = positionField.value - 1;
    todoList.toggleTodoStatus(position);
    positionField.value = '';
    view.readTodos();
  },

  toggleAll() {
    todoList.toggleAll();
    view.readTodos();
  }
};

const view = {
  // it should have a object method to Read todos
  // readTodos should show if todos are empty
  // readTodos should show the todo text
  // readTodos should show the todo status
  readTodos() {
    view.generateList();
  },

  // generate a list container
  generateList() {
    const list = document.querySelector('.todos__list');
    list.innerHTML = '';

    todoList.todos.forEach((todo, index) => {
      const listItem = this.generateListItem(todo, index);
      listItem.appendChild(this.createDeleteButton());
      list.appendChild(listItem);
    });
  },

  // generate a single list item
  // it should have a delete button for every todo
  // it should have a id for every todo
  generateListItem(todo, id) {
    const listItem = document.createElement('li');
    listItem.id = id;
    if (todo.isCompleted) {
      listItem.innerHTML = `<span>(x) ${todo.todoText}</span>`;
    } else {
      listItem.innerHTML = `<span>( ) ${todo.todoText}</span>`;
    }
    return listItem;
  },

  createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    return deleteButton;
  },

  setListeners() {
    const todoLI = document.querySelector('.todos__list');
    todoLI.addEventListener('click', (event) => {
      handlers.deleteTodo(parseInt(event.target.parentNode.id));
    });
  }
};

view.setListeners();
