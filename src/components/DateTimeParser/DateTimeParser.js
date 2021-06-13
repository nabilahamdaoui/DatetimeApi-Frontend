import React, { Component } from 'react';
import './DateTimeParser.scss';
import axios from 'axios';
import moment from 'moment';
import Result from '../Result/Result';
import SubmitButton from "../SubmitButton/SubmitButton";


class DateTimeParser extends Component {

    constructor(props) {
        super(props);
        this.state = {dateString: 'now-1d-1h', result: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({dateString: event.target.value, result: ''});
    }

    handleSubmit(event) {
        event.preventDefault();
        const now = new moment().format('YYYY-MM-DDTHH:mm:ss') ;

        axios.post('https://drd28iqq24.execute-api.us-east-2.amazonaws.com/prod', {
            input: this.state.dateString,
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
                    <input type="text" className="date-string-input" placeholder="Enter Date String" value={this.state.dateString} onChange={this.handleChange}/>
                </div>
                <SubmitButton color="white"/>
            </form>

            <Result value={this.state.result}/>
        </div>
        );

    }

}

export default DateTimeParser;