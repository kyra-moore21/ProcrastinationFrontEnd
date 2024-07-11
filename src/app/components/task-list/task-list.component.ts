import { Component } from '@angular/core';
import { TaskModel } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { AddTaskFormComponent } from '../add-task-form/add-task-form.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [AddTaskFormComponent, FormsModule, DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  currentDateTime: string| null = "a";
  constructor(private taskService:TaskService, private userService:UserService,public datePipe: DatePipe){
    this.currentDateTime = this.datePipe.transform((new Date), 'fullDate');
  }
  AllTasks:TaskModel [] = [];
  updateTask = {} as TaskModel;
  // currentDate: Date = ;
 

  ngOnInit(){
    this.getTasks();
   
  }
  
// getCurrentDate(){
//   this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
// }

  getTasks(){
    this.taskService.GetAllTasks().subscribe((response: TaskModel[]) => {
      console.log(response);
      this.AllTasks = response;
    });
  }
  addTask(t: TaskModel){
    this.taskService.AddTask(t).subscribe((response: TaskModel) => {
      console.log(response);
      this.getTasks();
    });
  }
  getUser(){
    return this.userService.currentUser.userId;
  }
  completeTask(t: TaskModel){
    t.isComplete = !t.isComplete;
    this.taskService.UpdateTask(t).subscribe((response) => {
      console.log(response);
      this.getTasks();
    });
  }
deleteTask(id: number){
this.taskService.DeleteTask(id).subscribe((response) =>{
  console.log(response);
  this.getTasks();
})

}
  
}
