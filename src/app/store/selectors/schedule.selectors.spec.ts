import { storeMock } from 'src/app/mocks/store.mock';
import * as scheduleSelectors from './schedule.selectors';

it('should select all the search results', () => {
  const result = scheduleSelectors.getAllScheduleShows.projector(storeMock.schedule);
  expect(result.length).toBe(72);
});

it('should select the most rated shows', () => {
  const result = scheduleSelectors.getScheduleHighlights.projector(
    [...storeMock.schedule.values()],
  );
  expect(result[0].id).toBe(2648854);
});

it('should select the shows by genre', () => {
  const result = scheduleSelectors.getScheduleShowsByGenre.projector(
    [...storeMock.schedule.values()],
  );
  expect(result['Children'][0].id).toBe(2667977);
});
