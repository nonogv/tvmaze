import { createReducer, on } from '@ngrx/store';
import * as seacrhActions from '../actions/search.actions';
import { initialSearchState } from '../states/search.state';

export const searchReducer = createReducer(
  initialSearchState,
  on(
    seacrhActions.fetchSearchShowsSuccess,
    (_, { showsData }) => new Map(
      showsData.map(
        (show) => [show.show.id, show],
      ),
    ),
  ),
  on(
    seacrhActions.cleanSearchShows,
    () => new Map(),
  ),
);
