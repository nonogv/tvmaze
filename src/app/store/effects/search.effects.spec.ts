import { Observable, of } from 'rxjs';
import { SearchEffects } from './search.effects';
import { Action, createAction } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { Injector } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { fetchSearchShows, fetchSearchShowsSuccess } from '../actions/search.actions';
import { ShowsService } from 'src/app/services/shows.service';
import { TestScheduler } from 'rxjs/testing';
import { storeMock } from 'src/app/mocks/store.mock';

const searchResponseMock = [...storeMock.search.values()];

describe('SearchEffects', () => {
  let actions$ = new Observable<Action>();
  let effects: SearchEffects;
  let injector: Injector;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    injector = Injector.create({
      providers: [
        provideMockActions(() => actions$),
        SearchEffects,
        {
          provide: ShowsService,
          useValue: {
            fetchSearchShows: () => of(searchResponseMock),
          }
        }
      ],
    });
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    actions$ = injector.get(Actions);
    effects = injector.get(SearchEffects);
  });

  it('searches for shows', () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      actions$ = hot('a', { a: fetchSearchShows({ searchTerm: 'test' })});
      expectObservable(effects.fetchShows$).toBe('b', {
        b: fetchSearchShowsSuccess({ showsData: searchResponseMock }),
      });
    });
  });
});
