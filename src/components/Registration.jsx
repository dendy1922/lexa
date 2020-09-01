import React, { Fragment } from "react";
import Input from "./Input";
import { Mycontext } from "./../App"

export default class Registration extends React.Component {

    constructor(props) {
        let click = this.context;
        console.log(click);
        super(props);
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
                    <button type="submit">submit</button>
                </form>
            </div >
        )
    }

}

Registration.contextType = Mycontext;


{/* <form onSubmit={this.handleSubmit}>
  <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
  <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
  <Input type="password" name="password_confirmation" placeholder="Confirm password" value={this.state.password_confirmation} onChange={this.handleChange} />
  <button type="submit">submit</button>
</form> */}