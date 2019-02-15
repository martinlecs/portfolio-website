import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Email from '@material-ui/icons/Email';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const fields = [
  { name: "name", text: "Name", required: true },
  { name: "email", text: "Email", required: true },
  { name: "subject", text: "Subject", required: false },
  { name: "message", text: "Your Message", required: false },
];

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const InputField = props => {
  let input;
  if (props.name === "message") {
    input = (
      <Input
        id={props.name}
        name={props.name}
        multiline
        rowsMax="4"
        onChange={props.eventHandler}
      />
    );
  } else {
    input = (
      <Input
        id={props.name}
        name={props.name}
        onChange={props.eventHandler}
      />
    );
  }

  return (
    <FormControl margin="normal" fullWidth required={props.required}>
      <InputLabel htmlFor={props.name}>{props.text}</InputLabel>
      {input}
    </FormControl>
  );
};

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // this.props.addProject(this.state);
  };

  render() {
    const { classes } = this.props;
    const inputs = fields.map(field => {
      return (
        <InputField
          key={field.name}
          name={field.name}
          text={field.text}
          required={field.required}
          eventHandler={this.handleChange}
        />
      );
    });

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Email />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            {inputs}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    // addProject: project => dispatch(addProject(project))
  };
};

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(Contact)
);
