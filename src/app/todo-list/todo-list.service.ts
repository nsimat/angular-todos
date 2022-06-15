import { Todo } from './../models/Todo';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TodoListService {
  private resourceUrl = 'http://192.168.1.4:8081/api/v1/toodos';

  constructor(private http: HttpClient) { }

  create(todo: Todo): Observable<Todo>{
    const copy = this.convert(todo);
    return this.http.post<Todo>(this.resourceUrl, copy);
  }

  private convert(todo: Todo): Todo{
    const copy: Todo = Object.assign({}, todo);
    return copy;
  }
}
