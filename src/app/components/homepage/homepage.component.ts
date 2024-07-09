import { Component } from '@angular/core';
import { DailyInspoComponent } from '../daily-inspo/daily-inspo.component';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { TaskModel } from '../../models/task';
import { MealPlannerComponent } from '../meal-planner/meal-planner.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [DailyInspoComponent, MealPlannerComponent, TaskListComponent, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
constructor(private userService:UserService){}
IsLoggedIn(){
  return this.userService.loggedIn;
}
}
