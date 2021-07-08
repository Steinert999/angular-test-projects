import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import {
  ConfirmDialogComponent,
  DialogAction,
} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: TodoService,
    private dialog: MatDialog
  ) {}

  title = '';
  id = '';

  @Input() todo: Todo = {
    title: '',
    description: '',
    day: new Date(),
    done: false,
  };

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id !== undefined) {
      this.service.getTodo(parseInt(this.id)).subscribe((todo) => {
        this.todo = todo;
        this.title = 'Editar Tarefa';
      });
    } else {
      this.title = 'Nova Tarefa';
    }
  }

  save(): void {
    if (this.todo.id) {
      this.validate(DialogAction.UPDATE).subscribe((result) => {
        if (result) {
          this.service.update(this.todo).subscribe(() => {
            this.router.navigate(['/todos']);
          });
        }
      });
    } else {
      this.validate(DialogAction.CREATE).subscribe((result) => {
        if (result) {
          this.service.createTodo(this.todo).subscribe((data) => {
            this.router.navigate(['/todos']);
          });
        }
      });
    }
  }
  cancel(): void {
    this.router.navigate(['/todos']);
  }

  validate(action: DialogAction.CREATE | DialogAction.UPDATE) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { action: action },
    });
    return dialogRef.afterClosed();
  }
}
