import React from 'react';
import './App.scss';
import DateTimeParser from './components/DateTimeParser/DateTimeParser'
import DateTimeStringifier from './components/DateTimeStringifier/DateTimeStringifier'
import Layout from "./components/Layout/Layout";
import Instruction from "./components/Instruction/Instruction";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="main">
            <div className="row">
                <div className="col-md-6 layout">
                    <Layout color="blue">
                        <Instruction color="white" title="Parse a string" text="Enter the date string that you want to parse (it should look like 'now-1d-1h') and click on submit to parse it. "/>
                        <DateTimeParser/>
                    </Layout>
                </div>
                <div className="col-md-6 layout" >
                    <Layout color="antiquewhite">
                        <Instruction color = "black" title="Stringify a date" text="Choose a date and click on submit to stringify it to something like 'now-1d-1h'."/>
                        <DateTimeStringifier/>
                    </Layout>
                </div>
            </div>
        </div>
    );
}

export default App;
