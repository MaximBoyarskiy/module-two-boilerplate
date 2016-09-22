
import { handleSearchClick } from './handlers';
import './main.css';
/*
full API description you can find here:
https://ru.wargaming.net/developers/api_reference

you don't have to pass application_id query param.
It will be passed automatically via proxy server
*/

window.document.addEventListener('DOMContentLoaded', () => {
  const searchButton = window.document.querySelector('#search');
  searchButton.addEventListener('click', handleSearchClick);
});
