import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'schedule',
    loadComponent: () => import('./pages/schedule/schedule.page').then((m) => m.SchedulePage),
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.page').then((m) => m.SearchPage),
  },
  {
    path: 'show/:showId',
    loadComponent: () => import('./pages/show/show.page').then((m) => m.ShowPage),
  },
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full',
  },
];

