import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskModel } from '../../models/task';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  @Output() Submitted = new EventEmitter<TaskModel>();
    formTask: TaskModel = {} as TaskModel;
    constructor(private userService:UserService){}

    emitSubmitted(){
      this.formTask.isComplete = false;
      this.formTask.userId = this.userService.currentUser.userId;
      let newTask:TaskModel = {...this.formTask};
     this.Submitted.emit(newTask);
     this.formTask = {} as TaskModel;
    }
}
