import React, { Component } from 'react';
import { connect } from 'react-redux';

class DayDetail extends Component {
    render() {
        if(!this.props.selected) {
            return <h4>Select a day</h4>
        }
        return <h4>{this.props.selected.day}</h4>
    }
}

function mapStateToProps(state) {
    return {
        selected: state.selectedDay
    };
}

export default connect(mapStateToProps)(DayDetail);