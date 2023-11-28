import { Schedule } from 'src/app/models/schedule.model';

export type ScheduleState = Map<number, Schedule>;

export const initialScheduleState: ScheduleState = new Map();
