import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { QuoteService } from '../../services/quote.service';
import { RecipeService } from '../../services/recipe.service';
import { TriviaService } from '../../services/trivia.service';
import { WeatherService } from '../../services/weather.service';
import { JokeModel } from '../../models/joke';
import { QuoteModel } from '../../models/quote';
import { TriviaModel } from '../../models/trivia';
import { GoogleSigninButtonModule, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [GoogleSigninButtonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
    constructor(private jokeService:JokeService, private quoteService:QuoteService, 
      private recipeService:RecipeService, private triviaService:TriviaService, 
      private weatherService:WeatherService){}
  

      user:SocialUser = {} as SocialUser

      ngOnInit(){
        this.GetJokes()
        this.GetTrivia()
        this.GetRecipe()
        

      }

      GetJokes(){
        this.jokeService.getJokes().subscribe((response:JokeModel)=>{
          console.log(response)
        })
      }

      GetQuote(){
        this.quoteService.getQuote().subscribe((response:QuoteModel)=>{
          console.log(response)
        })
      }

      GetTrivia(){
        this.triviaService.getTrivia().subscribe((response:TriviaModel)=>{
          console.log(response)
        })
      }

      GetRecipe(){
        this.recipeService.getRecipes().subscribe((response)=>{
          console.log(response)
        })
      }


  }


