import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:7169"

  GetAllTasks():Observable<TaskModel[]>{
    return this.http.get<TaskModel[]>(`${this.url}/api/Task`);
  }

  GetTaskbyId(id:number):Observable<TaskModel> {
    return this.http.get<TaskModel>(`${this.url}/api/Task/${id}`);
  }

  AddTask(newTask:TaskModel):Observable<TaskModel>{
    return this.http.post<TaskModel>(`${this.url}/api/Task`, newTask);
  }

  UpdateTask(updateTask:TaskModel):Observable<void>{
    return this.http.put<void>(`${this.url}/api/Task/${updateTask.taskId}`, updateTask);
  }


  DeleteTask(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/api/Task${id}`)
  }
}
