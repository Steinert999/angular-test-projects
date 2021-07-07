import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: TodoService) { }

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
      this.service.getTodo(parseInt(this.id)).subscribe(todo => {
        this.todo = todo;
        this.title = "Editar Tarefa"
      })
    } else {
      this.title = "Nova Tarefa"
    }
  }


  save(): void {
    if (this.todo.id) {
      this.service.update(this.todo).subscribe(() => {
        this.router.navigate(['/todos'])
      });
    } else {
      this.service.createTodo(this.todo).subscribe((data) => {
        this.router.navigate(['/todos']);
      });
    }
  }
  cancel(): void {
    this.router.navigate(['/todos']);
  }




}
