import React from 'react';
import './App.scss';
import DateTimeParser from './components/DateTimeParser/DateTimeParser'
import Layout from "./components/Layout/Layout";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="main">
            <div className="row">
                <div className="col-md-6 layout">
                    <Layout color="blue">
                        <DateTimeParser/>
                    </Layout>
                </div>
                <div className="col-md-6 layout" >
                    <Layout color="antiquewhite">
                        <DateTimeParser/>
                    </Layout>
                </div>
            </div>
        </div>


    );
}

export default App;
