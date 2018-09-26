import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import {
    connect
} from 'react-redux';
import Login from './components/Login';
import Chat from './components/Chat';

class App extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        screen: PropTypes.string,
    };

    constructor(props) {
        super();
        const loggedInUser = localStorage.getItem('loggedInUser');
        const roomid = localStorage.getItem('loggedInUserRoomId');
        this.state = {
            username: loggedInUser || '',
            screen: loggedInUser ? 'Chat' : '',
            roomId: roomid || '',
        };
    }

    onSignIn(username) {
        this.props.dispatch({
            type: 'GET_USERNAME',
            username,
        });
    }

    render() {
        const screen = this.props.screen || this.state.screen;
        const username = this.props.username || this.state.username;
        const roomid = this.props.roomId || this.state.roomId;
        if (screen === '') {
            return <Login onSubmit = {this.onSignIn.bind(this)}/>;
        } else if (screen === 'Chat') {
            return <Chat username = {username} roomId = {roomid}/>;
        }
    }
}

const mapStateToProps = state => ({
    screen: state.screen,
    username: state.username,
    roomId: state.roomId,
});

export default connect(mapStateToProps)(App);
