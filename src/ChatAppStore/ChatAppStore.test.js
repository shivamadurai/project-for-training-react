const { createStore } = require('redux');
const ChatAppStore = require('.');
const should = require('chai').should();
 
describe('Capstone Project unit testing', function() {
  it('should SET_USER_NAME', function() {
        const currState = {
            username: ''
        };

        const store = createStore(ChatAppStore, currState);

        const action = {
        type: 'GET_USER_NAME',
        username : 'santhosh'
        };

        store.dispatch(action);
    
        store.getState().should.have.property('username');
        store.getState().username.equal('santhosh');
  });
});
