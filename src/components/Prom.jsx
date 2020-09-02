import React from 'react';
import { MyContext } from "./Context";
import Registration from "./Registration";


class Prom extends React.Component {
    constructor(props) {
        super(props);
        this.submitClose = props.submitClose
    }
    render() {
        return (
            <div>
                <Registration submitClose={this.submitClose} updateStoreFunc={this.context} />
            </div>
        )
    }
}

Prom.contextType = MyContext;
export default Prom;