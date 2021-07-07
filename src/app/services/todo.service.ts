import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl: string;
  httpOptions: {};

  constructor(private HttpClient: HttpClient) {
    this.apiUrl = 'http://localhost:3000';
    this.httpOptions = {
      hearder: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
  }

  getTodos(): Observable<Todo[]> {
    return this.HttpClient.get<Todo[]>(`${this.apiUrl}/todos`, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError),
      );
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.HttpClient.post<Todo>(
      `${this.apiUrl}/todo`,
      JSON.stringify(todo),

    )
  }


  handleError(error: any): Observable<never> {
    let message = '';
    if (error?.error instanceof ErrorEvent) {
      error = error.error.message;
    } else {
      error = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(message)
  }
}
