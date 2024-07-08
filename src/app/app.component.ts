import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, GoogleSigninButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'procrastinationPlannerFrontEnd';

  constructor(private socialAuthServiceConfig:SocialAuthService){}

     
    
  user:SocialUser = {} as SocialUser;
    
  loggedIn: boolean = false;

  ngOnInit(){
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser)=> {
      this.user = userResponse;
      this.loggedIn = (userResponse != null);
    })
  }


  signOut(): void {
    this.socialAuthServiceConfig.signOut();
  }


}
