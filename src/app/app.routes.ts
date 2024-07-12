import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
    {path:"", component:LandingComponent},
    {path:"homepage", component:HomepageComponent},
    {path:"profile", component:ProfileComponent}
  
];
