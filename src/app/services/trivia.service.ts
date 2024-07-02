import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TriviaModel } from '../models/trivia';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private http:HttpClient) { }

  getTrivia():Observable<TriviaModel>{
    return this.http.get<TriviaModel>(`https://opentdb.com/api.php?amount=1`)
  }
}
