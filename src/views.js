import { handleUserClick } from './handlers';


export function renderAccount(account) {
  return `
    <li class="list-group-item js-account" data-id="${account.account_id}">
    ${account.nickname}</li>
  `;
}

export function renderError(message) {
  const searchResults = document.querySelector('#search-results');
  searchResults.innerHTML = message;
}

export function renderUserProfile({ nickname, global_rating: globalRating, statistics }) {
  const { wins, battles } = statistics.all;
  const winsPercent = (wins / (battles * 100)).toFixed(2);
  return `
    <div class="jumbotron">
    <h1><span class="glyphicon glyphicon-user">${nickname}</span></h1>
    <p>Ratings <span class="badge">${globalRating}</span></p>
    <p>Battles <span class="badge">${battles}</span></p>
    <p>Wins Percent <span class="badge">${winsPercent}</span><p>
    </div>
  `;
}

function addEventListenerForAccountDetails() {
  const searchResultItems = document.querySelectorAll('.js-account');
  for (const item of searchResultItems) {
    item.addEventListener('click', handleUserClick);
  }
}

export function renderSearchResult(accounts) {
  const searchResults = document.querySelector('#search-results');
  let result;
  if (accounts.length !== 0) {
    result = accounts.map(renderAccount).join('');
  } else {
    result = 'Account not found';
  }
  searchResults.innerHTML = result;
  addEventListenerForAccountDetails();
}
