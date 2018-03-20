import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    fullName: "",
    fullNameError: "",
    email: "",
    emailError: "",
    phone: "",
    phoneError: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
        fullNameError: "",
        emailError: "",
        phoneError: ""
    };

    if (this.state.phone.length != 10) {
      isError = true;
      errors.phoneError = "phone number should be 10 digits";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
    fullName: "",
    fullNameError: "",
    email: "",
    emailError: "",
    phone: "",
    phoneError: ""
      });
    }
  };

  render() {
    
        return (
         
            <form>
              <TextField
                name="fullName"
                hintText="Full Name"
                value={this.state.fullName}
                errorText={this.state.fulltNameError}
                onChange={e => this.change(e)}
                floatingLabelFixed
              />
              
              <TextField
                name="email"
                hintText="Email adderess"                
                value={this.state.email}
                errorText={this.state.emailError}
                onChange={e => this.change(e)}
                floatingLabelFixed
              />
              
              <TextField
                name="phone"
                hintText="phone"                
                value={this.state.phone}
                errorText={this.state.phoneError}
                onChange={e => this.change(e)}
                floatingLabelFixed
              />
              
              <RaisedButton label="Add New" onClick={e => this.onSubmit(e)} primary />
            </form>
            

          );
  }



  
}


