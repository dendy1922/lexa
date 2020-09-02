import React from "react";
import Input from "./Input";
import Button from "./Button";


const initialState = {
    email: "",
    password: "",
    password_confirmation: "",
    emailError: "",
    passwordError: "",
    passwordConError: ""
};


class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.updateStoreFunc = props.updateStoreFunc;
        this.submitClose = props.submitClose;
        this.state = initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            console.log("Form submited");
            this.setState(initialState);
            this.updateStoreFunc(this.state);
            this.submitClose();
        }
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        event.preventDefault();
    };
    validate = () => {
        let emailError = "";
        let passwordError = "";
        let passwordConError = "";

        if (!this.validateEmail(this.state.email)) {
            emailError = "email wrong";
        }

        if (!this.validationPassword(this.state.password)) {
            passwordError = "invalid password";
        }
        if (!this.validationPasswordConfirmation(this.state.password, this.state.password_confirmation)) {
            passwordConError = "Not same passwords";
        }

        if (emailError || passwordError || passwordConError) {
            this.setState({ emailError, passwordError, passwordConError });
            console.log(this.state)
            return false;
        }

        return true;
    };
    validationPassword = password => {
        return password.length >= 5 ? true : false
    }

    validateEmail = email => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validationPasswordConfirmation = (password, password_confirmation) => {
        return (password === password_confirmation) && (password);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input errorMes={this.state.emailError} type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                    <Input errorMes={this.state.passwordError} type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    <Input errorMes={this.state.passwordConError} type="password" name="password_confirmation" placeholder="Confirm password" value={this.state.password_confirmation} onChange={this.handleChange} />
                    <Button type="submit">Submit</Button>
                </form>
            </div >
        )
    }

}

export default Registration;
