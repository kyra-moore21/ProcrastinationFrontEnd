import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
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

  constructor(private socialAuthServiceConfig:SocialAuthService, private userService:UserService, private router: Router){}

     
    
  user:SocialUser = {} as SocialUser;
    

  ngOnInit(){
    this.userService.Login();
   if(!this.userService.loggedIn){
    this.router.navigate(['/'])
   }
  }

  IsLoggedIn(){
    return this.userService.loggedIn;
    
    
  }
  signOut(): void {
    this.userService.signOut();
  }




}
