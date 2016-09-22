import { loadUsers, loadProfile } from './loaders';
import { renderUserProfile, renderSearchResult, renderError } from './views';
import { toggleSpinner } from './helpers';

// eslint-disable-next-line no-unused-vars
export function handleSearchClick(e) {
  const usernameField = document.querySelector('#username');
  toggleSpinner();
  loadUsers(usernameField.value)
  .then(data => renderSearchResult(data))
  .catch(message => renderError(message))
  .then(response => toggleSpinner()); // eslint-disable-line no-unused-vars
}

function showAccountProfile(accountId) {
  const profile = document.querySelector('#profile');
  toggleSpinner();
  loadProfile(accountId)
    .then(data => renderUserProfile(data))
    .then((html) => {
      profile.innerHTML = html;
      return html;
    })
    .then(data => toggleSpinner()); // eslint-disable-line no-unused-vars
}

export function handleUserClick(e) {
  const userNode = e.target;
  const accountId = userNode.dataset.id;
  userNode.classList.toggle('active');
  showAccountProfile(accountId);
}
