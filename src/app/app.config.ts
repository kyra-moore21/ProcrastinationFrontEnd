import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { environment } from '../environments/environment.development';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { DatePipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
     //We are building a provider. Version 2.2.0 of package doesn't provide one.
     {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              //Remove the .apps.googleusercontent.com from the client id
              //MAKE SURE TO HIDE IT FROM GITHUB
              environment.clientId
            ),
          },
        ],
        onError: (err) => {
          debugger;
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    //more providers can go here
   provideHttpClient(), DatePipe]};
