import { storeMock } from 'src/app/mocks/store.mock';
import { cleanSearchShows, fetchSearchShows, fetchSearchShowsSuccess } from './search.actions';

const showsData = [[...storeMock.search.values()][0]];

describe('fetchSearchShowsSuccess', () => {
  it('should create an action to search shows', () => {
    const action = fetchSearchShows({ searchTerm: 'test' });
    expect(action).toEqual({
      type: 'FETCH_SEARCH_SHOWS',
      searchTerm: 'test',
    });
  });

  it('should create an action to clean search results', () => {
    const action = cleanSearchShows();
    expect(action).toEqual({ type: 'CLEAN_SEARCH_SHOWS' });
  });

  it('should create an action to save search results', () => {
    const action = fetchSearchShowsSuccess({ showsData });
    expect(action).toEqual({
      type: 'FETCH_SEARCH_SHOWS_SUCCESS',
      showsData,
    });
  });
});