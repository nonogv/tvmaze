import { fetchScheduleShowsSuccess } from '../actions/schedule.actions';
import { initialScheduleState } from '../states/schedule.state';
import { scheduleReducer } from './schedule.reducer';
import { storeMock } from 'src/app/mocks/store.mock';

const showsData = [[...storeMock.schedule.values()][0]];

describe('scheduleReducer', () => {
  it('should save all shows in a map by the show id', () => {
    const action = fetchScheduleShowsSuccess({ showsData });
    const state = scheduleReducer(initialScheduleState, action);
    expect(state).toEqual(new Map([[showsData[0].show.id, showsData[0]]]));
  });
});