import React from "react";

export default class Button extends React.Component {

    render() {
        return (

            <div>
                <button type={this.props.type}>{this.props.children}</button>
            </div>

        )
    }
}