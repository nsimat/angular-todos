import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
  private resourceUrl = 'http://192.168.1.4:8081/api/v1/toodos';

  constructor(private http: HttpClient) { }
}
