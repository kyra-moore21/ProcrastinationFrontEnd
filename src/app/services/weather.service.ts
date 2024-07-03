import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherModel } from '../models/weather';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getWeather():Observable<WeatherModel>{
    return this.http.get<WeatherModel>(`https://api.openweathermap.org/data/2.5/weather?q=Hazel Park&appid=${environment.weatherApiKey}&units=imperial"`);
  }
}
