import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuoteModel } from '../models/quote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
   url:string = "https://localhost:7169"

  constructor(private http: HttpClient) { }
  GetAll():Observable<QuoteModel[]>{
    return this.http.get<QuoteModel[]>(`${this.url}/api/Quote`)
  }
}
