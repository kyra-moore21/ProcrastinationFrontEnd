import { Component } from '@angular/core';
import { DailyInspoComponent } from '../daily-inspo/daily-inspo.component';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { TaskModel } from '../../models/task';
import { MealPlannerComponent } from '../meal-planner/meal-planner.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { RouterLink } from '@angular/router';
import { AddMealFormComponent } from "../add-meal-form/add-meal-form.component";
import { UserModel } from '../../models/user';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-homepage', 
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [DailyInspoComponent, MealPlannerComponent, TaskListComponent, RouterLink, AddMealFormComponent, DatePipe]
})
export class HomepageComponent {
constructor(private userService:UserService){}
ExampleUser:UserModel = {} as UserModel;

}