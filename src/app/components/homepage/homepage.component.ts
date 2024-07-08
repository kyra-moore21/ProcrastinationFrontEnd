import { Component } from '@angular/core';
import { DailyInspoComponent } from '../daily-inspo/daily-inspo.component';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { TaskModel } from '../../models/task';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [DailyInspoComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(private taskService:TaskService, private userService:UserService){}
  AllTasks:TaskModel [] = [];
  ngOnInit(){
    this.getTasks();
  }

  getTasks(){
    this.taskService.GetAllTasks().subscribe((response: TaskModel[]) => {
      console.log(response);
      this.AllTasks = response;
    });
  }

  getUser(){
    return this.userService.currentUser.userId;
  }
}
