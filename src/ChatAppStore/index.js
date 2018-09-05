function ChatAppStore(currState, action) {
  
  switch(action.type) {
    case 'GET_USER_NAME':
      return Object.assign({}, {
        username: action.username
      })

    case 'SET_USER_NAME':
      return Object.assign({}, {
        screen: 'ChattingSection',
        username: action.username
      })

    default:
      return currState;
  }
}

module.exports = ChatAppStore;