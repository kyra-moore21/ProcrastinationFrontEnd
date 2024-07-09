import { Component } from '@angular/core';
import { MealPlannerService } from '../../services/meal-planner.service';
import { MealPlannerModel } from '../../models/meal-planner';
import { RecipeModel } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-meal-planner',
  standalone: true,
  imports: [],
  templateUrl: './meal-planner.component.html',
  styleUrl: './meal-planner.component.css'
})
export class MealPlannerComponent {
  constructor(private mealService: MealPlannerService, private recipeService: RecipeService){}

  allMeals: MealPlannerModel[] = [];
  allRecipes: RecipeModel[] = [];

  GetAllMeals(){
    this.mealService.GetAll().subscribe((response)=>{
      console.log(response);
      this.allMeals = response;
    })
  }

  GetMealById(id:number){
    this.mealService.GetById(id).subscribe((response)=>{
      console.log(response)
    })
  }

  AddMeal(m:MealPlannerModel){
    this.mealService.AddMealPlan(m).subscribe((response:MealPlannerModel)=>{
      console.log(response);
      this.GetAllMeals();
    })
  }

  UpdateMeal(targetMeal:MealPlannerModel){
    this.mealService.UpdateMealPlan(targetMeal).subscribe((response)=>{
      console.log(response);
      this.GetAllMeals();
    })
  }

  DeleteMeal(id:number){
    this.mealService.DeleteMeal(id).subscribe((response)=>{
      console.log(response)
      this.GetAllMeals()
    })
  }

  GetAllRecipes(){
    this.recipeService.getRecipes().subscribe((response: RecipeModel[]) => {
      this.allRecipes = response;
    })
  }

  getRandom():number{
    let random = Math.floor(Math.random() *   59);
    console.log(random); 
    return random;
  }

//  GetRandomMeal(){
//   let random = this.getRandom();
//   console.log(random);
//   this.recipeService.getById(random).subscribe((response: MealPlannerModel)=>{
//     console.log(response);
//     this.randomMeal = response;
//    });
//  }

}
