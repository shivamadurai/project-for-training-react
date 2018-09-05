import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

const styles = {
    paperStyle : {
        padding: '10px'
    },
    listStyle : {
        listStyle: 'none',
        padding: '10px 0 0'
    }
}

class ChatWindow extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.messages.map((message, index) => (
                    <li key={index} style={styles.listStyle}>
                        <Paper style={styles.paperStyle} >
                            <span>{message.senderId}</span>
                            <p>{message.text}</p>
                        </Paper>
                    </li>
                    ))}
                </ul> 
            </div>
        )
    }
}

export default ChatWindow;