import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../models/task';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  url: string = "http://localhost:3000/tasks";
  
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.url);
  }

  addTask(task: Task) : Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  constructor(private http: HttpClient) { }
}
