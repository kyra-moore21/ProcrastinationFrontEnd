import { Component, EventEmitter, Output } from '@angular/core';
import { MealPlannerModel } from '../../models/meal-planner';
import { MealPlannerService } from '../../services/meal-planner.service';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-meal-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-meal-form.component.html',
  styleUrl: './add-meal-form.component.css'
})
export class AddMealFormComponent {
  @Output() Submitted = new EventEmitter<MealPlannerModel>();
  formMeal: MealPlannerModel = {} as MealPlannerModel;
  constructor(private mealPlannerService: MealPlannerService, private userService: UserService){}

  emitSubmitted(){
    this.formMeal.isCompleted = false;
    this.formMeal.like = false;
    this.formMeal.userId = this.userService.currentUser.userId;
    let addMeal: MealPlannerModel = {...this.formMeal};
    this.Submitted.emit(addMeal);
    this.formMeal = {} as MealPlannerModel;

    
  }

}
