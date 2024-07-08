import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:7169";//Clare

  GetUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.url}/api/User`);

  }


  GetById(id:number):Observable<UserModel>{
    return this.http.get<UserModel>(`${this.url}/api/User/${id}`);
  }

  AddUser(newUser:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(`${this.url}/api/User`, newUser);
  }

  UpdateUser(targetUser:UserModel):Observable<void>{
    return this.http.put<void>(`${this.url}/api/User/${targetUser.userId}`, targetUser);
  }

  DeleteUser(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/api/User/${id}`);
  }


}
