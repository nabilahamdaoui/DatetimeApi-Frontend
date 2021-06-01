import React, { Component } from 'react';
import './SubmitButton.scss';
import PropTypes from 'prop-types';


class SubmitButton extends Component {

    render() {
        return (
        <div>
            <button type="submit" className="submit">
                    <span className={"circle " + this.props.color} aria-hidden="true">
                        <span className={"icon arrow "+ this.props.color}/>
                    </span>
                <span className={"button-text "+ this.props.color}>Submit</span>
            </button>
        </div>
        );
    }
}

SubmitButton.propTypes = {
    color: PropTypes.string.isRequired
};

export default SubmitButton;