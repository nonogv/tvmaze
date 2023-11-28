import { ScheduleState } from './schedule.state';
import { SearchState } from './search.state';

export type RootState = {
  search: SearchState,
  schedule: ScheduleState,
};
