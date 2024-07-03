import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { QuoteService } from '../../services/quote.service';
import { RecipeService } from '../../services/recipe.service';
import { TriviaService } from '../../services/trivia.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-daily-inspo',
  standalone: true,
  imports: [],
  templateUrl: './daily-inspo.component.html',
  styleUrl: './daily-inspo.component.css'
})
export class DailyInspoComponent {
  constructor(private jokeService:JokeService, private quoteService:QuoteService, 
    private recipeService:RecipeService, private triviaService:TriviaService, 
    private weatherService:WeatherService){}

    
}
