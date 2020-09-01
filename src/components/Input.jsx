import React from "react";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div>
                <input type={this.props.type} name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange} required />
            </div>

        )
    }
}