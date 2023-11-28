import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, exhaustMap, map } from 'rxjs';
import { ShowsService } from 'src/app/services/shows.service';
import { fetchSearchShows, fetchSearchShowsSuccess } from '../actions/search.actions';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private showsService: ShowsService,
  ) { }

  fetchShows$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchSearchShows),
      exhaustMap(({ searchTerm }) =>
        this.showsService.fetchSearchShows(searchTerm).pipe(
          map((showsData) => fetchSearchShowsSuccess({ showsData }))
        ),
      ),
    ));
}
