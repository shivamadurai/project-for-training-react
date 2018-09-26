import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

const styles = {
  wrapper: {
    padding: '10px',
    width: '300px'
  },
  list: {
    cursor: 'default',
  },
  highlighted: {
    background: '#e2e2e2',
    cursor: 'default',
  },
};

class UsersList extends Component {
  render() {
    if (this.props.users) {
      return (
          <Fragment>
            <h2>Users</h2>
            <List component="nav" style={styles.wrapper}>
                {this.props.users.map((user, index) => {
                if (user.id === this.props.currentUser.id) {
                return (
                    <ListItem style={styles.highlighted} key={user.id} button>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                        <ListItemText primary={user.name} />
                    </ListItem>
                );
                }
                return (
                    <ListItem style={styles.list} key={user.id} button>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                        <ListItemText primary={user.name} />
                    </ListItem>
                );
                })}
            </List>
        </Fragment>
      );
    }
    return <p>Loading User...</p>;
  }
}

export default UsersList;
