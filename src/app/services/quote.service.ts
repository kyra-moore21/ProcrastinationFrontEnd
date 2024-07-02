import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuoteModel } from '../models/quote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }
  getQuote():Observable<QuoteModel>{
    return this.http.get<QuoteModel>(`https://zenquotes.io/api/quotes/`)
  }
}
