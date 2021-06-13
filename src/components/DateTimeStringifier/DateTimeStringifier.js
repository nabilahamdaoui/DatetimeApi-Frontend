import React, { Component } from 'react';
import './DateTimeStringifier.scss';
import axios from 'axios';
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';
import Result from '../Result/Result';
import SubmitButton from "../SubmitButton/SubmitButton";

class DateTimeStringifier extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date(), result: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(value) {
        this.setState({date: value, result: ''});
    }

    handleSubmit(event) {
        event.preventDefault();
        const now = new moment().format('YYYY-MM-DDTHH:mm:ss') ;

        axios.post('https://gvx7fkwcxf.execute-api.us-east-2.amazonaws.com/prod',
            {
               input: new moment(this.state.date).format('YYYY-MM-DDTHH:mm:ss'),
               now: now
            })
            .then(response => {
                if(response.data.errorMessage) {
                    alert(response.data.errorMessage);
                } else {
                    this.setState({result: `${response.data} (now==${now})`})
                }

            }).catch();

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

            <Result value={this.state.result}/>

        </div>
        );

    }

}

export default DateTimeStringifier;