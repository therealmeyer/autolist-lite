import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { fetchSearch } from './util/search_api_util';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  const root = document.getElementById('root');

  window.fetchSearch = fetchSearch;

  ReactDOM.render(<Root store={store} />, root);

});