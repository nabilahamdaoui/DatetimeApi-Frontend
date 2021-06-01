import React, { Component } from 'react';
import './Result.scss';

class Result extends Component {

    render() {
        return (
        <div>
            <h5 className="result">{this.props.value}</h5>
        </div>

        );

    }

}

export default Result;