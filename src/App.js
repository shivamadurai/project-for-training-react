import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginUserSection from './components/LoginUserSection';
import ChatDetailsSection from './components/ChatDetailsSection';
import {connect} from 'react-redux';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    screen: PropTypes.string,
  };

  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
    this.getUser = this.getUser.bind(this)
  }

  getUser(username) {
    this.props.dispatch({
      type: 'GET_USER_NAME',
      username
    });
  }

  render() {
    const screen_ = this.props.screen || '';
    const username_ = this.props.username || '';
    if (screen_ === '') {
      return <LoginUserSection onSubmit={this.getUser} />
    }
    if (screen_ === 'ChattingSection') {
      return <ChatDetailsSection username={username_} />
    }
  }
}

const mapStateToProps = (state) => ({
  screen: state.screen,
  username : state.username
});

export default connect(mapStateToProps) (App)
