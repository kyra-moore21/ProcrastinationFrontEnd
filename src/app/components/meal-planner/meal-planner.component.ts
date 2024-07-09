import { Component } from '@angular/core';
import { MealPlannerService } from '../../services/meal-planner.service';
import { MealPlannerModel } from '../../models/meal-planner';
import { RecipeModel } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { AddMealFormComponent } from "../add-meal-form/add-meal-form.component";

@Component({
    selector: 'app-meal-planner',
    standalone: true,
    templateUrl: './meal-planner.component.html',
    styleUrl: './meal-planner.component.css',
    imports: [FormsModule, AddMealFormComponent]
})
export class MealPlannerComponent {
  constructor(private mealService: MealPlannerService, private recipeService: RecipeService, private userService: UserService){}

  allMeals: MealPlannerModel[] = [];
  allRecipes: RecipeModel[] = [];
  randomRecipe: RecipeModel = {} as RecipeModel;
  formMeal: MealPlannerModel = {} as MealPlannerModel;

ngOnInit(){
  this.GetAllRecipes();
  this.GetRandomRecipe();
  this.GetAllMeals();
}

getUser(){
  return this.userService.currentUser.userId;
}

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

  completeMeal(t: MealPlannerModel){
    t.isCompleted = !t.isCompleted;
    this.mealService.UpdateMealPlan(t).subscribe((response) => {
      console.log(response);
      this.GetAllMeals();
    });
  }

  likeMeal(t: MealPlannerModel){
    t.like = !t.like;
    this.mealService.UpdateMealPlan(t).subscribe((response) => {
      console.log(response);
      this.GetAllMeals();
    });
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
    let random = Math.floor(Math.random() * 59);
    console.log(random); 
    return random;
  }

 GetRandomRecipe(){
  let random:number = this.getRandom();
  console.log(random);
  this.recipeService.GetRecipeByID(random).subscribe((response: RecipeModel)=>{
    console.log(response);
    this.randomRecipe = response;
   });
 }

}
