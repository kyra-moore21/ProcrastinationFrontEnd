import { Component } from '@angular/core';
import { MealPlannerService } from '../../services/meal-planner.service';
import { MealPlannerModel } from '../../models/meal-planner';
import { RecipeModel } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { AddMealFormComponent } from "../add-meal-form/add-meal-form.component";
import { UserModel } from '../../models/user';

@Component({
  selector: 'app-meal-planner',
  standalone: true,
  templateUrl: './meal-planner.component.html',
  styleUrl: './meal-planner.component.css',
  imports: [FormsModule, AddMealFormComponent]
})
export class MealPlannerComponent {
  constructor(private mealService: MealPlannerService, private recipeService: RecipeService, private userService: UserService) { }

  allMeals: MealPlannerModel[] = [];
  allRecipes: RecipeModel[] = [];
  randomRecipe: RecipeModel = {} as RecipeModel;
  formMeal: MealPlannerModel = {} as MealPlannerModel;
  displayRecipe: boolean = false;
  userMeals: MealPlannerModel[] = [];
  activeUser: UserModel = this.userService.currentUser;

  ngOnInit() {
    this.getUser();
    this.GetAllRecipes();
    this.GetRandomRecipe();
    this.GetMealById();
  }

  getUser() {
    return this.userService.currentUser.userId;
  }

  // GetAllMeals(){
  //   this.mealService.GetAll().subscribe((response)=>{
  //     console.log(response);
  //     this.allMeals = response;
  //   })
  // }

  GetMealById() {
    // this.userService.GetById(id).subscribe((response) => {
      this.mealService.GetById(this.userService.currentUser.userId).subscribe((response) => {
        console.log(response);
        this.userMeals = response;
      })
   // })

  }

  AddMeal(m: MealPlannerModel) {
    this.mealService.AddMealPlan(m).subscribe((response: MealPlannerModel) => {
      console.log(response);
      this.GetMealById();
    })
  }

  UpdateMeal(targetMeal: MealPlannerModel) {
    this.mealService.UpdateMealPlan(targetMeal).subscribe((response) => {
      console.log(response);
      this.GetMealById();
    })
  }

  completeMeal(t: MealPlannerModel) {
    t.isCompleted = !t.isCompleted;
    this.mealService.UpdateMealPlan(t).subscribe((response) => {
      console.log(response);
      this.GetMealById();
    });
  }

  likeMeal(t: MealPlannerModel) {
    t.like = !t.like;
    this.mealService.UpdateMealPlan(t).subscribe((response) => {
      console.log(response);
      this.GetMealById();
    });
  }


  DeleteMeal(id: number) {
    this.mealService.DeleteMeal(id).subscribe((response) => {
      console.log(response)
      this.GetMealById();
    })
  }

  GetAllRecipes() {
    this.recipeService.getRecipes().subscribe((response: RecipeModel[]) => {
      this.allRecipes = response;
    })
  }

  getRandom(): number {
    let random = Math.floor(Math.random() * 59);
    console.log(random);
    return random;
  }

  GetRandomRecipe() {
    let random: number = this.getRandom();
    console.log(random);
    this.recipeService.GetRecipeByID(random).subscribe((response: RecipeModel) => {
      console.log(response);
      this.randomRecipe = response;
    });
  }

  ConvertRecipetoMeal(r: RecipeModel) {

    let meal: MealPlannerModel = {
      userId: this.userService.currentUser.userId,
      mealId: 0,
      title: r.title,
      url: r.url,
      like: false,
      isCompleted: false
    }
    this.AddMeal(meal)
  }
  ShowRecipe() {
    this.displayRecipe = !this.displayRecipe;
  }

  ShuffleRecipe() {
    this.displayRecipe = true;
    this.GetRandomRecipe()
  }
}
