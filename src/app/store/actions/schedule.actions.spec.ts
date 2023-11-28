import { storeMock } from 'src/app/mocks/store.mock';
import { fetchScheduleShowsSuccess } from './schedule.actions';

const showsData = [[...storeMock.schedule.values()][0]];

describe('fetchScheduleShowsSuccess', () => {
  it('should create an action', () => {
    const action = fetchScheduleShowsSuccess({ showsData });
    expect(action).toEqual({
      type: 'FETCH_SCHEDULE_SHOWS_SUCCESS',
      showsData,
    });
  });
});