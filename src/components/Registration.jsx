import React from "react";
import Input from "./Input";
import Button from "./Button";

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.updateStoreFunc = props.updateStoreFunc;
        this.submitClose = props.submitClose;
        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        console.log("form submitited");
        this.updateStoreFunc(this.state);
        this.submitClose();
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                    <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    <Input type="password" name="password_confirmation" placeholder="Confirm password" value={this.state.password_confirmation} onChange={this.handleChange} />
                    <Button type="submit">Submit</Button>
                </form>
            </div >
        )
    }

}

export default Registration;
