import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
constructor(private userService: UserService,){}
currentUsers: UserModel  = {}as UserModel;
isLoggedIn:boolean = false;

ngOnInit(){
  this.getCurrentUser();
 
}

getCurrentUser(): UserModel{
  return this.currentUsers = this.userService.currentUser;
}

updateUser(targetUser: UserModel){
this.userService.UpdateUser(targetUser).subscribe((response)=>{
  console.log(response);
  this.getCurrentUser();
})
}

}
