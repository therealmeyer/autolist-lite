import { fetchSearch } from '../util/search_api_util';

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const receiveSearch = results => ({
  type: RECEIVE_SEARCH,
  results
});

export const fetchSearchResults = range => dispatch => (
  fetchSearch(range).then(results => dispatch(receiveSearch(results)))
);