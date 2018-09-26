import React, { Component } from 'react';

const styles = {
  ul: {
    maxHeight: '515px',
    overflow: 'auto'
  },
  li: {
    border: '1px solid #b2b2b2',
    backgroundColor: '#e2e2e2',
    listStyle: 'none',
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '12px',
  },
  username: {
    fontSize: '15px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  message: {
    fontSize: '12px',
    textAlign: 'right',
    marginRight: '20px'
  },
};

class MessengerBox extends Component {
  render() {
    if (this.props.messages) {
      return (
        <div>
          <ul style={styles.ul}>
            {this.props.messages.map((message, index) => (
              <li style={styles.li} key={index}>
                >
                {' '}
                <span style={styles.username}>{message.senderId}</span>
                <p style={styles.message}>{message.text}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return (<div>Loading message...</div>);
  }
}

export default MessengerBox;
