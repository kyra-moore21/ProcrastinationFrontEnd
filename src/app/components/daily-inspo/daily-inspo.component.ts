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
import { WeatherModel } from '../../models/weather';
import { FormsModule } from '@angular/forms';
import { TriviaModel } from '../../models/trivia';

@Component({
  selector: 'app-daily-inspo',
  standalone: true,
  imports: [GoogleSigninButtonModule, FormsModule],
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
    randomJoke: JokeModel = {} as JokeModel;
    weather: WeatherModel = {} as WeatherModel;
    trivia: TriviaModel = {}  as TriviaModel;
    city: string = "";

   ngOnInit(){
    this.DisplayQuote();
    this.GetJokesById();
    this.getTrivia();
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
  
  getRandom():number{
    let random = Math.floor(Math.random() *   378);
    console.log(random); 
    return random;
  }
  GetJokesById(){

    let random = this.getRandom();
    console.log(random);
    this.jokeService.getById(random).subscribe((response: JokeModel)=>{
      console.log(response);
      this.randomJoke = response;
     });
  }
  getWeather(city:string){
        this.weatherService.getWeather(city).subscribe((response: WeatherModel) => {
        console.log(response);
        this.weather = response;
    })
    
  }
  
  getTrivia(){

      this.triviaService.getTrivia().subscribe((response: TriviaModel) => {
        console.log(response);
        this.trivia = response;
      });
    
  }
    
}
