import React from "react";
import classes from "./style.module.css"

export default class Input extends React.Component {

    render() {
        return (

            <div>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
                <div className={classes.error}>
                    {this.props.errorMes}
                </div>
            </div>

        )
    }
}