// it should have a place to store todos
const todos = ['item1', 'item2'];

// it should have a way to Read todos
console.log(todos);

// it should have a way to Create a todo
todos.push('item3');

// it should have a way to Update a todo
todos[0] = 'item1 updated';

// it should have a way to Delete a todo
todos.splice(0, 1);