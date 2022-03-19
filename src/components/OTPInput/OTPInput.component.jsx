import React, { Component } from 'react';
import OtpInput from 'react-otp-input';

export default class OTP extends Component {
    state = { otp: '' };

    handleChange = (otp) => this.setState({ otp });

    myStyle = {
        backgroundColor: "#eefcfc",
        margin: "10px 0",
        marginRight: "30px",
        width: "25px",
        height: "35px",
        border: "none",
    }
    focusStyle = {
        backgroundColor: "#ccffff",
        margin: "10px 0",
        marginRight: "30px",
        width: "25px",
        height: "35px",
        border: "none",
        boxShadow: "1px 1px 3px gray"
    }
    render() {
        return (
            <OtpInput
                value={this.state.otp}
                onChange={this.handleChange}
                numInputs={6}
                separator={<span></span>}
                inputStyle={this.myStyle}
                focusStyle={this.focusStyle}
            />
        );
    }
}