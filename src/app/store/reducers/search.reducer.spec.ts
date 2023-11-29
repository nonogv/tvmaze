import { cleanSearchShows, fetchSearchShowsSuccess } from '../actions/search.actions';
import { initialSearchState } from '../states/search.state';
import { searchReducer } from './search.reducer';
import { storeMock } from 'src/app/mocks/store.mock';

const showsData = [[...storeMock.search.values()][0]];

describe('searchReducer', () => {
  it('should save all shows in a map by the show id', () => {
    const action = fetchSearchShowsSuccess({ showsData });
    const state = searchReducer(initialSearchState, action);
    expect(state).toEqual(new Map([[showsData[0].show.id, showsData[0]]]));
  });

  it('should clean all results from the store', () => {
    const action = cleanSearchShows();
    const state = searchReducer(initialSearchState, action);
    expect(state).toEqual(new Map());
  });
});