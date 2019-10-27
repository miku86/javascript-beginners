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

- Real Life: Einkaufszettel schreiben
- neue Version: WARUM? => Array

Requirements:

```
// it should have a place to store todos
// it should have a way to Read todos
// it should have a way to Create a todo
// it should have a way to Update a todo
// it should have a way to Delete a todo
```

What we've learned:

- READ: console.log()
- CREATE: todos.push()
- UPDATE: todos[i]
- DELETE: todos.splice()

## Debugger

Why?

- Wie man ihn aufruft und was er macht
- JEDE Zeile Code verstehen (expectation, reality)
- Breakpoints, F9 to go step by step

---

## Version 2 (Functions)

Why?

- Real Life: Name auf Papier schreiben
- neue Version: WARUM? => Abstraktion

Requirements:

```
// it should have a place to store todos
// it should have a function to Read todos
// it should have a function to Create a todo
// it should have a function to Update a todo
// it should have a function to Delete a todo
```

What we've learned:

- READ: function readTodos()
- CREATE: function createTodo()
- UPDATE: function updateTodo()
- DELETE: function deleteTodo()

---

## Version 3 (Object)

Why?

- Real Life: Schuhschrank vorstellen
- Version 3: WARUM? => Ordnung

Requirements:

```
// it should have a place to store todos
// it should have an object method to Read todos
// it should have an object method to Create a todo
// it should have an object method to Update a todo
// it should have an object method to Delete a todo
```

What we've learned:

- READ: object method readTodos()
- CREATE: object method createTodo()
- UPDATE: object method updateTodo()
- DELETE: object method deleteTodo()

---

## Version 4 (Boolean, Object)

Why?

- Real Life: Einkaufszettel (abhakbar) schreiben
- neue Version: WARUM? => neue Funktionen, Boolean
- Wie von Hand Status hinzufügen? => Object

Requirements:

```
// it should have an object method to Create a todo as an object
// it should have an object method to Update a todo text
```

What we've learned:

---

## Version 5 (for-loop, if/else)

Why?

- Real Life: 10mal "Hallo" sagen
- neue Version: WARUM? => neue Funktion, for-loop, if/else
- for-loop: Initialization, Condition, Final Expression

Requirements:

```
// readTodos should show if todos are empty
// readTodos should show the todo text
// readTodos should show the todo status
```

What we've learned:

---

## Version 6

Why?

- neue Version: WARUM? => for-loop üben

Requirements:

```
// it should make every todo false, if every todo is true
// it should make every todo true, if not every todo is true
```

What we've learned:

---

## Version 7

Why?

- neue Version: WARUM? => User Interface

Requirements:

```
// it should show a "display todos" button
// it should show a "toggle all" button
// it should run readTodos when clicking "display todos"
// it should run toggleAll when clicking "toggle all"
```

What we've learned:

---

## Version 8

Why?

- neue Version: WARUM? => Code einfacher zu erweitern, neue Funktionen

Requirements:

```
// it should have working controls for createTodo
// it should have working controls for updateTodoText
// it should have working controls for deleteTodo
// it should have working controls for toggleTodoStatus
```

What we've learned:

---

## Version 9

Why?

- neue Version: WARUM? => Grafische Oberfläche, Organisation (MVC)

Requirements:

```
// it should have a list item for every todo
// it should show the todo text and status in every list item
```

What we've learned:

---

## Version 10

Why?

- neue Version: WARUM? => Grafische Oberfläche

Requirements:

```
// it should have a delete button for every todo
// it should have a id for every todo
// it should delete a specific todo when clicking on it
```

What we've learned:

---

## Version 11

Why?

- neue Version: WARUM? => bessere Lesbarkeit (Readability)

Requirements:

```
// it should use `forEach()` instead of a for-loop everywhere
```

What we've learned:
