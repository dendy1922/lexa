import React from 'react';
import { MyContext } from "./Context";
import Registration from "./Registration";


class Prom extends React.Component {

    render() {
        return (
            <div>
                <Registration updateStoreFunc={this.context} />
            </div>
        )
    }
}

Prom.contextType = MyContext;
export default Prom;