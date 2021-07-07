import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent implements OnInit {
  constructor(private router: Router, private service: TodoService) {}

  title = '';
  id = '';

  @Input() todo: Todo = {
    id: '',
    title: '',
    description: '',
    day: new Date(),
    done: false,
  };

  ngOnInit(): void {
    if(this.id === '') {
      this.title = "Nova Tarefa"
    }
  }


  create(): void {
    this.service.createTodo(this.todo).subscribe((data) => {
    this.router.navigate(['/todos']);
    console.log(data);
    });

  }
  cancel(): void {
    this.router.navigate(['/todos']);
  }




}
