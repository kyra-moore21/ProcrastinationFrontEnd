import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { UserService } from './services/user.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, GoogleSigninButtonModule, HomepageComponent, ProfileComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'procrastinationPlannerFrontEnd';

  constructor(private socialAuthServiceConfig:SocialAuthService, private userService:UserService){}

     
    
  user:SocialUser = {} as SocialUser;
    

  ngOnInit(){
    this.userService.GetUsers().subscribe((response) => {
      this.userService.users = response;
    });
    this.userService.Login();
  }

  IsLoggedIn(){
    return this.userService.loggedIn;
  }
  signOut(): void {
    this.userService.signOut();
  }


}
