import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, defer, exhaustMap, map, take } from 'rxjs';
import { fetchScheduleShowsSuccess } from '../actions/schedule.actions';
import { ShowsService } from 'src/app/services/shows.service';

@Injectable()
export class ScheduleEffects {
  constructor(
    private actions$: Actions,
    private showsService: ShowsService,
  ) {}

  fetchShows$: Observable<Action> = createEffect(() =>
    defer(() => this.actions$.pipe(
      take(1),
      exhaustMap(() => 
        this.showsService.fetchScheduleShows().pipe(
          map((showsData) => fetchScheduleShowsSuccess({ showsData })),
        ),
      ),
    ),
  ));
}
