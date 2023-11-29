import { storeMock } from 'src/app/mocks/store.mock';
import * as searchSelectors from './search.selectors';

it('should select all the search results', () => {
  const result = searchSelectors.getAllSearchShows.projector(storeMock.search);
  expect(result).toEqual([...storeMock.search.values()]);
});
