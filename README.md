# JavaScript for Beginners

## Basic Instructions

### Get the materials

#### If you are NOT familiar with Git

- Download it: https://github.com/miku86-workshops/javascript-beginners/archive/master.zip
- Extract it on your machine
- Go into the folder

#### If you are familiar with Git

- Clone repo via terminal (HTTPS): `git clone https://github.com/miku86-workshops/javascript-beginners.git`
- Clone repo via terminal ((SSH): `git clone git@github.com:miku86-workshops/javascript-beginners.git`
- Go into the folder

### Folder Structure

```
- README.md (the file you are currently reading)
- todos-v1
  - index.html
  - script.js
- todos-v2
  - index.html
  - script.js
.
.
.
- todos-v11
  - index.html
  - script.js
```

Every folder named `todos-v[number]` has two files:

- `index.html`: this is where your HTML lives
- `script.js`: this is where your JavaScript lives
- `script.js` and `index.html` are connected by a `<script>`-tag in `index.html`
- some basic styling is in the `head` of `index.html`, only in `todos-v11`, to keep the complexity of the file structure low (less files, less complexity)

---

## General Information

### What will be build?

A simple todo list

### Why will we build it?

To learn some problem solving techniques & some technical fundamentals

### Basic Ideas

- try to understand every line of code. If you don't understand a specific line: delete the line & see what breaks
- to tackle a problem, think about how you would do it, STEP-BY-STEP, in real-life:
  => How do you write down your todo items in real-life?
- use pseudo code: 1. write down the solution in your native tongue, 2. translate it into real code

```js
// 1. native tongue: if the todo list is empty
// 2. real code: if (todoList.length <= 0) {...}
```

- use the documentation of the language, e.g. google: `javascript documentation`
- use an editor to write your code: Visual Studio Code, Atom, Brackets, ...
- use a browser to see the output: Firefox, Chromium, Chrome, Edge, Safari, ...
- write down requirements BEFORE you start coding: (so that you know what you actually want to build)

  - `it should [display all todo items]` or
  - `the user can [see all todo items]`

- I recommend to use CRUD verbs: Create, Read, Update, Delete (you don't forget them)

```
// it should have a place to store todos
// it should have a way to Read todos
// it should have a way to Create a todo
// it should have a way to Update a todo
// it should have a way to Delete a todo
```

---

## Version 1

Why?

- we need some basic functionality

Requirements:

```
// it should have a place to store todos
// it should have a way to Read todos
// it should have a way to Create a todo
// it should have a way to Update a todo
// it should have a way to Delete a todo
```

What we've learned:

- what an array is (a collection of data)
- how to display data in the console: `console.log()`
- how to create elements: `todos.push(...)`
- how to update elements: `todos[i] = ...`
- how to delete elements: `todos.splice(...)`

## Debugger

Why?

- if your code doesn't do what you want it to do
- go through your code step-by-step
- go to your browser, hit `F12` and go to `Debugger`
- add breakpoints, F9 to go step by step

---

## Version 2 (Functions)

Why?

- our code isn't that organized, we see implementation details
- real-life: we want to use a tool (e.g. a TV), but we don't want to care about the internal parts and how they work (electrity, wires, circuits)
  => Abstraction
  => increased readability

Requirements:

```
// it should have a place to store todos
// it should have a function to Read todos
// it should have a function to Create a todo
// it should have a function to Update a todo
// it should have a function to Delete a todo
```

What we've learned:

- what a function is
- how we use a function
- why we use a function
- what abstraction means

---

## Version 3 (Object)

Why?

- increased readability
- even more organized structure
- hiding implementation details even more
  => encapsulation

Requirements:

```
// it should have a place to store todos
// it should have an object method to Read todos
// it should have an object method to Create a todo
// it should have an object method to Update a todo
// it should have an object method to Delete a todo
```

What we've learned:

- what an object is
- how we use an object
- why we use an object
- what encapsulation means

---

## Version 4 (Boolean, Object)

Why?

- a single todo should be togglable (it is done or not done)

Requirements:

```
// it should have an object method to Create a todo as an object
// it should have an object method to Update a todo text
```

What we've learned:

- what a boolean is
- why we use a boolean
- how to change our code so that we pass an object instead of a string to our todo list

---

## Version 5 (for-loop, if/else)

Why?

- we want to do sth repeatedly (loop)
- we want to do sth conditionally (if/else)

Requirements:

```
// readTodos should show if todos are empty
// readTodos should show the todo text
// readTodos should show the todo status
```

What we've learned:

- what a loop is
- how we use a loop
- what an if/else is
- how we use an if/else

---

## Version 6

Why?

- all todos should be togglable in one go
- practice of loop

Requirements:

```
// it should make every todo false, if every todo is true
// it should make every todo true, if not every todo is true
```

What we've learned:

- how we use a loop

---

## Version 7

Why?

- we want to see some real display values (instead of the console)
  => User Interface

Requirements:

```
// it should show a "display todos" button
// it should show a "toggle all" button
// it should run readTodos when clicking "display todos"
// it should run toggleAll when clicking "toggle all"
```

What we've learned:

- what an Event Listener is
- how we can connect a HTML element to a JavaScript function

---

## Version 8

Why?

- we add the remaining User Interface elements

Requirements:

```
// it should have working controls for createTodo
// it should have working controls for updateTodoText
// it should have working controls for deleteTodo
// it should have working controls for toggleTodoStatus
```

What we've learned:

- how to add some basic HTML elements that can run JavaScript code

---

## Version 9

Why?

- increase readability
- even more organized structure, again
- separation of tiers => MVC

Requirements:

```
// it should have a list item for every todo
// it should show the todo text and status in every list item
```

What we've learned:

- what MVC is
- how MVC works
- why we use MVC

---

## Version 10

Why?

- additional functionality in the User Interface

Requirements:

```
// it should have a delete button for every todo
// it should have a id for every todo
// it should delete a specific todo when clicking on it
```

What we've learned:

- how we give every todo its own delete button

---

## Version 11 (Functional Programming, forEach)

Why?

- increase readability (for each loop)

Requirements:

```
// it should use `forEach()` instead of a for-loop everywhere
```

What we've learned:

- the difference between imperative and functional programming
- what the `forEach` function is
- how we use the `forEach` function
