import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { scheduleReducer } from './app/store/reducers/schedule.reducer';
import { provideEffects } from '@ngrx/effects';
import { ScheduleEffects } from './app/store/effects/schedule.effects';
import { provideHttpClient } from '@angular/common/http';
import { register } from 'swiper/element/bundle';
import { SearchEffects } from './app/store/effects/search.effects';
import { searchReducer } from './app/store/reducers/search.reducer';

register();

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({
      mode: 'ios',
    }),
    provideHttpClient(),
    provideRouter(
      routes,
      withComponentInputBinding(),
    ),
    provideStore({
      schedule: scheduleReducer,
      search: searchReducer,
    }),
    provideEffects([
      SearchEffects,
      ScheduleEffects,
    ]),
    provideStoreDevtools(),
  ],
});
