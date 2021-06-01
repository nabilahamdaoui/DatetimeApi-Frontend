import React, { Component } from 'react';
import './DateTimeStringifier.scss';
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker';
import Result from '../Result/Result';
import SubmitButton from "../SubmitButton/SubmitButton";

class DateTimeStringifier extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date(), stringifiedDate: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(value) {
        this.setState({date: value, stringifiedDate: ''});
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('https://gvx7fkwcxf.execute-api.us-east-2.amazonaws.com/prod',
            "\"" + this.state.date.toISOString().slice(0, -1)+ "\"",
            { headers: {"Content-Type": "text/plain"}})
            .then(res => {
                this.setState({stringifiedDate: res.data})
            }).catch((e) => console.log(e)); // TODO: Show error message in

    }

    render() {
        return (
        <div className="text-center">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <DateTimePicker onChange={this.handleChange} value={this.state.date} className="date-time-input"/>
                </div>
                <SubmitButton color="black"/>
            </form>

            <Result value={this.state.stringifiedDate}/>

        </div>
        );

    }

}

export default DateTimeStringifier;