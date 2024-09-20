import { Component } from '@angular/core';
import { TaskModel } from '../../models/task';
import { UserModel } from '../../models/user';
import { UserService } from '../../services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  currentDateTime: string | null = "a";
  constructor(private userService:UserService, public datePipe: DatePipe) {
    this.currentDateTime = this.datePipe.transform((new Date), 'fullDate')}

  ExampleUser:UserModel = {} as UserModel;

  DeleteTask(t:TaskModel):void{
    let index: number = this.ExampleTasks.findIndex(p => p == t);
    this.ExampleTasks.splice(index, 1);
  }
  
  ExampleTasks:TaskModel[] = [
    {
     userid: 1,
     taskid: 1,
     task1: "Wipe down counters",
     deadline: new Date("2024-11-7"),
     details: "kitchen, living room",
     iscomplete: false,
     created: new Date("2024-10-7"),
     user:this.ExampleUser
    },
    {
      userid: 1,
      taskid: 2,
      task1: "Vacuum the floors",
      deadline: new Date("2024-11-8"),
      details: "bedroom, hallway",
      iscomplete: false,
      created: new Date("2024-10-8"),
      user: this.ExampleUser
   },
   {
    userid: 1,
    taskid: 3,
    task1: "Mop the floors",
    deadline: new Date("2024-11-9"),
    details: "kitchen, bathroom",
    iscomplete: false,
    created: new Date("2024-10-9"),
    user: this.ExampleUser
  },
  {
    userid: 1,
    taskid: 4,
    task1: "Laundry",
    deadline: new Date("2024-11-10"),
    details: "whites, colors",
    iscomplete: false,
    created: new Date("2024-10-10"),
    user: this.ExampleUser
  },
  {
    userid: 1,
    taskid: 5,
    task1: "Grocery shopping",
    deadline: new Date("2024-11-11"),
    details: "buy weekly groceries",
    iscomplete: false,
    created: new Date("2024-10-11"),
    user: this.ExampleUser
  },
  {
    userid: 1,
    taskid: 6,
    task1: "Water plants",
    deadline: new Date("2024-11-12"),
    details: "indoor and outdoor plants",
    iscomplete: false,
    created: new Date("2024-10-12"),
    user: this.ExampleUser
  },
  
  ]

  
toggle(t: TaskModel){
  t.iscomplete = !t.iscomplete;
}

}
