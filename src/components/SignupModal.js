import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

export default class SignupModal extends React.Component {
  onClose = () => {
    this.props.onClose();
  };

  render() {
    console.log(this.props);
    const { firstName, lastName } = this.props.fields;

    return (
      <Dialog
        open={this.props.isOpen}
        onClose={this.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Successful!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thanks {firstName}!
            <br />
            Your all signed up.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onClose} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
