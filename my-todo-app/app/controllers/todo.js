import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TodoController extends Controller {
  @tracked todos = [
    "Buy groceries",
    "Walk the dog",
    "Finish homework assignment",
    "Call dentist for appointment",
    "Organize desk workspace"
  ];
  // tracked = useState (kindof)
  @tracked newTodo = '';

  @action
  updateTodoInput(event) {
    this.newTodo = event.target.value;
  }

  @action 
  addNewTodo() {
    if (this.newTodo.trim() === '') {
      return;
    }
    // Immutability pattern is necesary for tracked properties
    this.todos = [...this.todos, this.newTodo.trim()];
    this.newTodo = '';
  }

  @action 
  removeTodo(index) {
    this.todos = this.todos.filter((_, i) => i !== index);
  }

}
