import axios from 'axios';
import Chatkit from '@pusher/chatkit';

let hostName = '';

if (window.location.hostname === 'localhost') {
    hostName = `http://${window.location.hostname}:3001`;
}

export function getUserName(username) {
    localStorage.setItem('loggedInUser', username);
    localStorage.setItem('loggedInUserRoomId', 15481131);
    return axios.post(`${hostName}/users`, {
        username
    }).then(result => new Promise((resolve, reject) => {
        resolve(username);
    })).catch(error => username);
}

export function getCurrentUser(username) {
    return new Chatkit.ChatManager({
        instanceLocator: 'v1:us1:38f14c56-f689-498f-a4f7-0c2c9a4be1d6',
        userId: username,
        tokenProvider: new Chatkit.TokenProvider({
            url: `${hostName}/authenticate`,
        }),
    }).connect().then(currentUser => new Promise((resolve, reject) => {
        resolve(currentUser);
    })).catch(error => console.error('Error in getCurrentUser', error));
}

export function userMessage(action) {
    return action.currentUser.fetchMessages({
            roomId: action.roomId,
            direction: 'older',
            limit: 30,
        })
        .then(messages => new Promise((resolve, reject) => {
                resolve(messages);
            })
            .catch((err) => {
                console.error(`Error in userMessage: ${err}`);
            }));
}

export function newChatRoom(action) {
    return action.currentUser.createRoom({
            name: action.roomName,
            private: false,
            user_ids: action.currentUser.id,
        })
        .then(room => new Promise((resolve, reject) => {
                resolve(room);
            })
            .catch((err) => {
                console.error(`Error in newChatRoom: ${err}`);
            }));
}

export function addNewUser(action) {
  return action.currentUser.addUserToRoom({
      userId: action.user,
      roomId: action.roomId,
  }).then(() => {
      console.log(`Added ${action.user}`);
    })
    .catch((err) => {
      console.log(`Error adding ${action.user}`);
    });
}
