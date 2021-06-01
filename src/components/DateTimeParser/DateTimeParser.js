import React, { Component } from 'react';
import './DateTimeParser.scss';
import axios from 'axios';
import Result from '../Result/Result';
import SubmitButton from "../SubmitButton/SubmitButton";


class DateTimeParser extends Component {

    constructor(props) {
        super(props);
        this.state = {dateString: 'now-1d-1h', parsedDate: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({dateString: event.target.value, parsedDate: ''});
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('https://drd28iqq24.execute-api.us-east-2.amazonaws.com/prod',
            "\"" + this.state.dateString+ "\"",
            { headers: {"Content-Type": "text/plain"}})
            .then(res => {
            this.setState({parsedDate: res.data})
        }).catch((e) => console.log(e)); // TODO: Show error message in

    }

    render() {
        return (
        <div className="text-center">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="date-string-input" placeholder="Enter Date String" value={this.state.dateString} onChange={this.handleChange}/>
                </div>
                <SubmitButton color="white"/>
            </form>

            <Result value={this.state.parsedDate}/>
        </div>
        );

    }

}

export default DateTimeParser;