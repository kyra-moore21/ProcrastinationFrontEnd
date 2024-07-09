import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:"", component:HomepageComponent},
    {path:"profile", component:ProfileComponent}
];
