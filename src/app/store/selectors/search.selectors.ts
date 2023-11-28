import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from '../states/search.state';

export const getSearchState = createFeatureSelector<SearchState>('search');

export const getAllSearchShows = createSelector(
  getSearchState,
  (shows) => [...shows.values()],
);
