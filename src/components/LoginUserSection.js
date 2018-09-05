import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 600,
      padding: theme.spacing.unit * 2,
      marginBottom: 100
    },
    gridWrapper: {
        margin: 50
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class UserInputSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.username);
    }

    onChange(e) {
        this.setState({ username: e.target.value });
    }

    render() {
        const classes = styles;
        
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Chat App
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Paper className={classes.root} style={this.userForm}>
                    <Grid container>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Grid container direction="row" justify="center" alignItems="center">
                                    <Typography variant="title" color="inherit">
                                        <form>
                                            <Grid item xs={12} sm container>
                                            <TextField
                                                id="name"
                                                label="Enter the User name"
                                                onChange={this.onChange.bind(this)}
                                                margin="normal"
                                            />
                                            </Grid>
                                            <Button onClick={this.onSubmit.bind(this)} variant="outlined" color="primary" >
                                                Submit
                                            </Button> 
                                        </form>
                                    </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default UserInputSection;