import { createSelector } from '@ngrx/store';
import { getScheduleState } from './schedule.selectors';
import { getSearchState } from './search.selectors';

export const getShowById = (showId: number) => createSelector(
  getScheduleState,
  getSearchState,
  (schedule, search) => schedule?.get(showId)?.show || search?.get(showId)?.show,
);
