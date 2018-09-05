import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

class UsersList extends Component {
    buttonStyle = {
        color : '#f44336'
    }

    margin = {
      marginTop: 30
    }

  render() {
    if (this.props.users) {
      return <div style={this.margin}>
            <List>
                {this.props.users.map((user, index) => {
                    if (user.id === this.props.currentUser.id) {
                      return (
                        <ListItem key={user.id}>
                            <Avatar>
                            <ImageIcon />
                          </Avatar>
                          <ListItemText style={this.buttonStyle} primary={user.name} secondary="current user" />
                        </ListItem>
                      )
                    }
                    return (
                      <ListItem key={user.id}>
                            <Avatar>
                            <ImageIcon />
                          </Avatar>
                          <ListItemText primary={user.name} />
                      </ListItem>
                    )
                })}
            </List>
        </div>
    } else {
      return <p>Please wait, user loading...</p>
    }
  }
}

export default UsersList;
