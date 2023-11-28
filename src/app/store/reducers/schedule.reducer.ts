import { createReducer, on } from '@ngrx/store';
import { initialScheduleState } from '../states/schedule.state';
import * as scheduleActions from '../actions/schedule.actions';

export const scheduleReducer = createReducer(
  initialScheduleState,
  on(
    scheduleActions.fetchScheduleShowsSuccess,
    (_, { showsData }) => new Map(
      showsData.map(
        (schedule) => [schedule.show.id, schedule],
      ),
    ),
  ),
);
