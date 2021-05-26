import React, { Component } from 'react';
import './Layout.scss';

class Layout extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={"row h-100 justify-content-center align-items-center " + this.props.color} >
                {this.props.children}
            </div>
        );

    }

}

export default Layout;