import React, { Component } from 'react';
import './DateTimeParser.scss';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://drd28iqq24.execute-api.us-east-2.amazonaws.com/prod'
});

class DateTimeParser extends Component {

    constructor(props) {
        super(props);
        this.state = {dateString: '', parsedDate: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({dateString: event.target.value, parsedDate: ''});
    }

    handleSubmit(event) {
        alert('A dateString was submitted: ' + this.state.dateString);
        event.preventDefault();
        api.post('/').then(res => {
            // TODO pass prop to component?? Button as component Result as component
            console.log(res.data);
            this.setState({parsedDate: res.data})
        })
    }

    render() {
        return (
        <div className="text-center">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="date-string-input" placeholder="Enter Date String" value={this.state.dateString} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="submit">
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"/>
                    </span>
                    <span className="button-text">Submit</span>
                </button>
            </form>

            <h2>{this.state.parsedDate}</h2>
        </div>
        );

    }

}

export default DateTimeParser;