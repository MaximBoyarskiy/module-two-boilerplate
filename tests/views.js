/* eslint-env mocha */
/* eslint-disable */

import { assert } from 'chai'
import { renderAccount } from 'views.js'

describe('RenderAccount', function() {
  const accountData = {
    account_id: 42,
    nickname: 'John'
  };

  before(function() {
    document.body.innerHTML = `<ul>${renderAccount(accountData)}</ul>`;
  });
  it('should render account name and id', function(){
    const userNode = document.querySelector('.js-account')
    assert.include(userNode.innerHTML, accountData.nickname);
    assert.equal(userNode.getAttribute('data-id'), accountData.account_id);
  });
  it('should have appropriate class', function() {
    assert.isOk(document.querySelector('.list-group-item'))
  });
})

/* eslint-enable */
