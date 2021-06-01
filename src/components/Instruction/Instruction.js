import React, { Component } from 'react';
import './Instruction.scss';
import PropTypes from 'prop-types';

class Instruction extends Component {

    render() {
        return (
            <div className="text-center instructions">
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

Instruction.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Instruction;