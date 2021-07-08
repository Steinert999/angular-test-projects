import { Router } from '@angular/router';
import { Component, OnInit, } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from './../../services/todo.service';
import { Todo } from 'src/app/models/todo';

import {
  DialogAction,
  ConfirmDialogComponent,
} from './../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  todolist$!: Observable<Todo[]>;
  constructor(private todoService: TodoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todolist$ = this.todoService.getTodos();
  }

  updateStatusTodo(todo: Todo): void {
    this.validate(DialogAction.UPDATE).subscribe((result) => {
      if (result) {
        todo.done = !todo.done;
        this.todoService.update(todo);
      }
    });
  }

  deleteTodo(todoId: number | undefined): void {
    this.validate(DialogAction.DELETE).subscribe((result) => {
      if (todoId !== undefined && result) {
        this.todoService.delete(todoId).subscribe(() => {
          this.todolist$ = this.todoService.getTodos();
        });
      }
    });
  }

  validate(action: DialogAction): Observable<boolean> {
    let result;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { action: action },
    });
    return dialogRef.afterClosed();
  }
}
