import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { QuoteService } from '../../services/quote.service';
import { RecipeService } from '../../services/recipe.service';
import { TriviaService } from '../../services/trivia.service';
import { WeatherService } from '../../services/weather.service';
import { GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { UserService } from '../../services/user.service';
import { QuoteModel } from '../../models/quote';
import { Observable } from 'rxjs';
import { JokeModel } from '../../models/joke';

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
    private weatherService:WeatherService, private userService:UserService){}

   
   AllQuotes: QuoteModel [] = [];
   AllJokes : JokeModel [] = []; 
    JokeLength: number = 0;
    

   ngOnInit(){
    this.DisplayQuote();
    }
  GetDisplay(){
    return this.userService.currentUser.display;
  }
   
  DisplayQuote(){
    this.quoteService.GetAll().subscribe((response: QuoteModel[])=>{
      console.log(response);
      this.AllQuotes = response;
      
    })
  }
  GetJokesLength():number{
    this.jokeService.getJokes().subscribe((response: JokeModel[])=>{
      
      this.AllJokes = response;
      this.JokeLength = this.AllJokes.length
    })
    return this.JokeLength;
  }

  GetJokesById():Observable<JokeModel>{
    let result =  {} as JokeModel;
    let random = Math.floor(Math.random() * this.GetJokesLength());
    this.jokeService.getById(random).subscribe((response: JokeModel)=>{
      console.log(response);
      result = response;

     })
    
  }
    

    
    
  
    

    

}
