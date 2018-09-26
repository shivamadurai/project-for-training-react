import React, {
    Component
} from 'react';

const styles = {
    chatText: {
        border: '1px solid #000',
        padding: '20px 11px 30px',
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: '10px'
    },
};

class MessageSubmitter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.text);
        this.setState({
            text: ''
        });
    }

    onChangeHandler(e) {
        this.setState({
            text: e.target.value
        });

        if (this.props.onChange) {
            this.props.onChange();
        }
    }

    render() {
        return ( <form onSubmit = {
                this.onSubmitHandler.bind(this)
            } >
            <input style = {styles.chatText}
            type = "text"
            placeholder = "Leave your messages here.."
            onChange = {
                this.onChangeHandler.bind(this)
            }
            value = {
                this.state.text
            }
            id = "message" />
            </form>
        );
    }
}

export default MessageSubmitter;
