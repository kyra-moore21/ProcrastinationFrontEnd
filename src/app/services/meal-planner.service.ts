import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MealPlannerModel } from '../models/meal-planner';

@Injectable({
  providedIn: 'root'
})
export class MealPlannerService {

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:7169"

  GetAll():Observable<MealPlannerModel[]>{
    return this.http.get<MealPlannerModel[]>(`${this.url}/api/MealPlanner`);
  }

  GetById(id:number):Observable<MealPlannerModel>{
    return this.http.get<MealPlannerModel>(`${this.url}/api/MealPlanner/${id}`);
  }

  AddMealPlan(newMeal:MealPlannerModel):Observable<MealPlannerModel>{
    return this.http.post<MealPlannerModel>(`${this.url}/api/MealPlanner`, newMeal);
  }

  UpdateMealPlan(targetMeal:MealPlannerModel):Observable<void>{
    return this.http.put<void>(`${this.url}/api/MealPlanner/${targetMeal.mealId}`, targetMeal);
  }

  DeleteMeal(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/api/MealPlanner/${id}`);
  }
}
