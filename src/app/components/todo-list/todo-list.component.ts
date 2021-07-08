import { Router } from '@angular/router';
import { Component, OnInit, } from '@angular/core';
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
  constructor(private todoService: TodoService,
    private router: Router) { }

  ngOnInit(): void {
    this.todolist$ = this.todoService.getTodos();
  }

  updateStatusTodo(todo: Todo): void {
    todo.done = !todo.done;
    this.todoService.update(todo);
  }

  deleteTodo(todoId: number | undefined): void {
    if (todoId !== undefined) {
      this.todoService.delete(todoId).subscribe(() => {
        this.todolist$ = this.todoService.getTodos();
      });
    }
  }
}
