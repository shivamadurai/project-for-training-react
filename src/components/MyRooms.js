import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  wrapper: {
    padding: '10px',
    bottom: '0',
  },
  list: {
    background: '#fff',
    cursor: 'default',
  },
  active: {
    background: '#e2e2e2',
    cursor: 'default',
  },
};

class MyRooms extends Component {
  changeRoom(id) {
    if (typeof (id) === 'number') {
      this.props.myRoom(id);
    }
  }

  render() {
    if (this.props.myRooms) {
      return (
          <Fragment>
            <h2>Room List => (Click on list to change the room)</h2>
            <List component="nav" style={styles.wrapper}>
                {this.props.myRooms.map((room, index) => {
                if (this.props.currentRoomId === room.id) {
                return (
                <ListItem style={styles.active} onClick={this.changeRoom.bind(this, room.id)} key={room.id}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={room.name} />
                </ListItem>

                );
                }
                return (
                <ListItem style={styles.list} onClick={this.changeRoom.bind(this, room.id)} key={room.id}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={room.name} />
                </ListItem>
                );
                })
                }
            </List>
        </Fragment>
      );
    }
    return (<div>Loading Rooms...</div>);
  }
}

export default MyRooms;
