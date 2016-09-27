/* eslint-env mocha */
/* eslint-disable */

import { assert } from 'chai'
import { loadUsers } from 'loaders'
import sinon from 'sinon'

describe('loadUsers', function() {
  const fakeData = {foo: 'bar'},
    fakeUser = 'fakeUserNick';

  beforeEach(function() {
    sinon.stub(window, 'fetch');
  });

  afterEach(function(){
    window.fetch.restore();
  });

  it('should call fetch url', function() {
    window.fetch.returns(Promise.resolve({
      json() {
        return {
          status: 'ok',
          data: fakeData
        }
      }
    }));

    loadUsers(fakeUser).then(function(data) {
      assert.equal(
        window.fetch.firstCall.args[0],
        `http://188.166.73.133/wg-api/wot/account/list/?search=${fakeUser}`
      );
    });
  });

  it('should process positive respone', function(done) {
    window.fetch.returns(Promise.resolve({
      json() {
        return {
          status: 'ok',
          data: fakeData
        }
      }
    }));

    loadUsers(fakeUser).then(function(data) {
      assert.equal(data, fakeData);
    }).then(done, done);
  });

  it('should process negative respone', function(done) {
    const fakeErrorMessage = 'fake message';

    window.fetch.returns(Promise.resolve({
      json() {
        return {
          status: 'error',
          error: {message: fakeErrorMessage}
        }
      }
    }));

    loadUsers(fakeUser).catch(function(message) {
      assert.equal(message, fakeErrorMessage);
    }).then(done, done);
  });
})

/* eslint-enable */
