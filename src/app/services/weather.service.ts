import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherModel } from '../models/weather';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:7169";

  getWeather(city:string):Observable<WeatherModel>{
    return this.http.get<WeatherModel>(`${this.url}/api/Weather?city=${city}`);
  }
}
