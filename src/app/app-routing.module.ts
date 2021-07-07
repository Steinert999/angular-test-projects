import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "todos", 
  children: [
    {path: '', component: TodoListComponent},
    {path: 'edit/:id', component: TodoEditComponent},
    {path: 'create', component: TodoCreateComponent},
    {path: '**', redirectTo: ''}
  ]},
  {path: '**', redirectTo: 'todos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouteComponents = [
  TodoCreateComponent,
  TodoEditComponent,
  TodoListComponent
]