import React, {Component} from 'react';
import './Layout.scss';

class Layout extends Component {


    render() {
        return (
            <div className={"row h-100 justify-content-center " + this.props.color}>
                {this.props.children}
            </div>
        );

    }

}

export default Layout;