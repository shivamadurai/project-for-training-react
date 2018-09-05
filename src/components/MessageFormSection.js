import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SendMessageForm extends Component {
    textInputStyle = {
        width : "100%"
    }

    constructor(props) {
        super(props);

        this.state = {
            text:''
        }
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.text);
        this.setState({ text: '' });
    }

    onChangeHandler(e) {
        this.setState({ text: e.target.value });
        
        if (this.props.onChange) {
            this.props.onChange();
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler.bind(this)}>
                <TextField style={this.textInputStyle}
                    id="messsage"
                    label="enter new message"
                    value={this.state.text}
                    onChange={this.onChangeHandler.bind(this)}
                    margin="normal"
                />
            </form>
        )
    }
}

export default SendMessageForm;