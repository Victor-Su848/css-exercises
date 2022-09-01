import Todo from "./classes/Todo.js";

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    const newTest = document.createElement('p');
    newTest.textContent = 'fuck';
    const newTodo = new Todo('victor', "gay", 'true', 'yes');
    newTest.append(newTodo.title);
    return newTest;
  }
  
  document.body.appendChild(component());