import { Component } from '@angular/core';
import { TaskModel } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { AddTaskFormComponent } from '../add-task-form/add-task-form.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UserModel } from '../../models/user';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [AddTaskFormComponent, FormsModule, DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  currentDateTime: string | null = "a";
  constructor(private taskService: TaskService, private userService: UserService, public datePipe: DatePipe) {
    this.currentDateTime = this.datePipe.transform((new Date), 'fullDate');
  }
  AllTasks: TaskModel[] = [];
  updateTask = {} as TaskModel;
  userTask: TaskModel[] = [];
  activeUser: UserModel = this.userService.currentUser
  // currentDate: Date = ;


  ngOnInit() {
    this.GetTaskById(this.activeUser.userid);

  }

  getTasks() {
    this.taskService.GetAllTasks().subscribe((response: TaskModel[]) => {
      console.log(response);
      this.AllTasks = response;
    });
  }

  GetTaskById(id: number) {
    this.userService.GetById(id).subscribe((response) => {
      this.taskService.GetTaskbyId(id).subscribe((response) => {
        console.log(response);
        this.userTask = response;
      })
    })
  }

  addTask(t: TaskModel) {
    this.taskService.AddTask(t).subscribe((response: TaskModel) => {
      console.log(response);
      this.GetTaskById(this.activeUser.userid);
    });
  }
  getUser() {
    return this.userService.currentUser.userid;
  }
  completeTask(t: TaskModel) {
    t.iscomplete = !t.iscomplete;
    this.taskService.UpdateTask(t).subscribe((response) => {
      console.log(response);
      this.GetTaskById(this.activeUser.userid);
    });
  }
  deleteTask(id: number) {
    this.taskService.DeleteTask(id).subscribe((response) => {
      console.log(response);
      this.GetTaskById(this.activeUser.userid);
    })

  }

}
