import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
  h1: {
    textAlign: 'center',
  },
  layout: {
    border: '#000',
    padding: '20px 20px 70px',
    backgroundColor: '#e2e2e2',
    marginTop: '20px',
    color: '#000',
  },
};
class Login extends Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
    };
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  onChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
        <Grid container spacing={24}>
            <Grid item xs={4} />
            <Grid item xs={4} style={styles.layout}>
                <h1 style={styles.h1}>Login</h1>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <Typography variant="title" color="inherit">Sign In</Typography>
                    <TextField id="name" label="Username" onChange={this.onChange.bind(this)} margin="normal" fullWidth />
                    <Button onClick={this.submitHandler.bind(this)} variant="raised" fullWidth color="secondary">
                        Submit
                    </Button>
                </form>
            </Grid>
            <Grid item xs={4} />
        </Grid>
    );
  }
}

export default Login;
