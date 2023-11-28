import { createAction, props } from '@ngrx/store';
import { Schedule } from 'src/app/models/schedule.model';

export const fetchScheduleShowsSuccess = createAction(
  'FETCH_SCHEDULE_SHOWS_SUCCESS',
  props<{ showsData: Schedule[] }>(),
);
