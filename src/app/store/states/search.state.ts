import { Search } from 'src/app/models/search.model';

export type SearchState = Map<number, Search>;

export const initialSearchState: SearchState = new Map();
