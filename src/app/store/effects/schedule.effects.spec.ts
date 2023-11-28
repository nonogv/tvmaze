import { Observable, of } from 'rxjs';
import { ScheduleEffects } from './schedule.effects';
import { Action, createAction } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { Injector } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { fetchScheduleShowsSuccess } from '../actions/schedule.actions';
import { ShowsService } from 'src/app/services/shows.service';
import { TestScheduler } from 'rxjs/testing';
import { storeMock } from 'src/app/mocks/store.mock';

const scheduleResponseMock = [...storeMock.schedule.values()];

describe('ScheduleEffects', () => {
  let actions$ = new Observable<Action>();
  let effects: ScheduleEffects;
  let injector: Injector;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    injector = Injector.create({
      providers: [
        provideMockActions(() => actions$),
        ScheduleEffects,
        {
          provide: ShowsService,
          useValue: {
            fetchScheduleShows: () => of(scheduleResponseMock),
          }
        }
      ],
    });
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    actions$ = injector.get(Actions);
    effects = injector.get(ScheduleEffects);
  });

  it('fetches the schedule on load', () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      actions$ = hot('a|', { a: createAction('test') });
      expectObservable(effects.fetchShows$).toBe('(b|)', {
        b: fetchScheduleShowsSuccess({ showsData: scheduleResponseMock }),
      });
    });
  });
});
