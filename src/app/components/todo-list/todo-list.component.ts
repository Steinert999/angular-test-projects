import { Component, OnInit,} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoService } from './../../services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


    todolist$!: Observable<Todo[]>;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todolist$ = this.todoService.getTodos();
  }

  updateTodo(todo: Todo):void {
    todo.done = !todo.done;
    this.todoService.update(todo);
  }

  deleteTodo(todoId: number | undefined): void {
    console.log(todoId);
    if (todoId) {
     this.todoService.delete(todoId);
    }
  }
}
