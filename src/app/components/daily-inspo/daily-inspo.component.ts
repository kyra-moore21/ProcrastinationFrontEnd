import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { QuoteService } from '../../services/quote.service';
import { RecipeService } from '../../services/recipe.service';
import { TriviaService } from '../../services/trivia.service';
import { WeatherService } from '../../services/weather.service';
import { GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-daily-inspo',
  standalone: true,
  imports: [GoogleSigninButtonModule],
  templateUrl: './daily-inspo.component.html',
  styleUrl: './daily-inspo.component.css'
})
export class DailyInspoComponent {
  constructor(private jokeService:JokeService, private quoteService:QuoteService, 
    private recipeService:RecipeService, private triviaService:TriviaService, 
    private weatherService:WeatherService, private socialAuthServiceConfig: SocialAuthService){}

   
    
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
  
    DisplayTasks(){
      //will eventually load users task list
    }

}
