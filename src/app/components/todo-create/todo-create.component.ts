import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
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
  routeId = '';

  formGroup!: FormGroup;

  ngOnInit(): void {

    this.formGroup = new FormGroup({
      id: new FormControl(null),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      day: new FormControl(''),
      done: new FormControl(false)
    })

    this.routeId = this.activatedRoute.snapshot.params['id'];
    if (this.routeId !== undefined) {
      this.service.getTodo(parseInt(this.routeId)).subscribe(todo => {
        this.formGroup.setValue({
          id: todo.id,
          title: todo.title,
          description: todo.description,
          day: todo.day,
          done: todo.done
        })
        this.title = "Editar Tarefa"
      })
    } else {
      this.title = "Nova Tarefa"
    }
  }

  getErrorMessage(fieldName: string) {
    return this.formGroup.get(fieldName)?.hasError('required') ? 'Esse campo é obrigatório' : null
  }


  save(): void {
    const todo: Todo = this.formGroup.value as Todo

    console.log(this.formGroup.get('title')?.invalid)
    if(this.formGroup.valid){
      if (todo.id) {
        this.service.update(todo).subscribe(() => {
          this.router.navigate(['/todos'])
        });
      } else {
        this.service.createTodo(todo).subscribe((data) => {
          this.router.navigate(['/todos']);
        });
      }
    }
  }
  cancel(): void {
    this.router.navigate(['/todos']);
  }




}
