import { createAction, props } from '@ngrx/store';
import { Search } from 'src/app/models/search.model';

export const fetchSearchShows = createAction(
  'FETCH_SEARCH_SHOWS',
  props<{ searchTerm: string }>(),
);

export const cleanSearchShows = createAction('CLEAN_SEARCH_SHOWS');

export const fetchSearchShowsSuccess = createAction(
  'FETCH_SEARCH_SHOWS_SUCCESS',
  props<{ showsData: Search[] }>(),
);
