import React, { Component } from 'react';
import ListDays from './days_list';
import DayDetail from './day_detail';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Days of the week</h1>
                <DayDetail />
                <ListDays />
            </div>
        );
    }
}

export default App;