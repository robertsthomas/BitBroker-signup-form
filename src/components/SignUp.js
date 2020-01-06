import React from "react";
import { NavLink } from "react-router-dom";
import SignupModal from "../components/SignupModal";
import Thomas from "../components/Thomas";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button, TextField, Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 450,
    height: 475,
    borderRadius: 10,
    padding: theme.spacing.unit * 4,
    backgroundColor: "#586c86"
  },
  grid: {
    marginTop: 40
  },
  bootstrapInput: {
    backgroundColor: "#345478",
    width: 275,
    color: "#ffffff",
    padding: 10,
    borderRadius: 2
  },
  form: {
    textAlign: "center",
    alignItems: "center",
    direction: "column",
    justifyContent: "center"
  },
  defaultButton: {
    margin: "10px 0px 15px 0px",
    backgroundColor: "#87b566",
    color: "white"
  },

  textColor: {
    color: "white"
  }
});

class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    open: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  openSignupModal = e => {
    e.preventDefault();

    this.setState({
      open: true
    });
  };

  closeSignupModal = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      open: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.grid}
        >
          <Paper className={classes.root} elevation={5}>
            <form className={classes.form} onSubmit={this.onSubmit}>
              <Typography
                variant="display1"
                gutterBottom
                className={classes.textColor}
              >
                Sign Up
              </Typography>
              <TextField
                name="firstName"
                id="first-name"
                placeholder="First Name"
                value={this.state.firstName}
                //autoFocus
                margin="normal"
                onChange={e => this.onChange(e)}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    input: classes.bootstrapInput
                  }
                }}
              />
              <TextField
                name="lastName"
                id="last-name"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={e => this.onChange(e)}
                margin="normal"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    input: classes.bootstrapInput
                  }
                }}
              />
              <TextField
                name="email"
                id="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.onChange(e)}
                margin="normal"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    input: classes.bootstrapInput
                  }
                }}
              />
              <TextField
                name="password"
                id="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.onChange(e)}
                margin="normal"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    input: classes.bootstrapInput
                  }
                }}
              />
              <div>
                <Button
                  variant="contained"
                  size="medium"
                  className={classes.defaultButton}
                  onClick={e => this.openSignupModal(e)}
                >
                  Create Account
                </Button>
                <Typography className={classes.textColor}>
                  Already have an account?
                  <Button variant="text" className={classes.textColor}>
                    <NavLink to="/login" exact>
                      Log in
                    </NavLink>
                  </Button>
                </Typography>
              </div>
            </form>
          </Paper>
        </Grid>
        <SignupModal
          isOpen={this.state.open}
          onClose={this.closeSignupModal}
          fields={this.state}
        />
        <Thomas />
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
