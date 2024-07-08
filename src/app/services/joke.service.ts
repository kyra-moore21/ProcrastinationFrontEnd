import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeModel } from '../models/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http:HttpClient) { }

  getJokes():Observable<JokeModel[]>{
    return this.http.get<JokeModel[]>(`https://api.sampleapis.com/jokes/goodJokes`)
  }

  getById(id:number):Observable<JokeModel>{
    return this.http.get<JokeModel>(`https://api.sampleapis.com/jokes/goodJokes/${id}`)
  }


}
