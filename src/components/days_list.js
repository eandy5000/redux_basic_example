import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseDay } from '../actions/index';

class ListDays extends Component {
    renderList() {
        return this.props.days.map(each => {
            return (
                <div 
                    key={each.day}
                    onClick={() => this.props.chooseDay(each)}
                >
                    {each.day}
                </div>);
        });
    }

    render() {
        return (
            <div>List of Days
            {this.renderList()}
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        days: state.days,
        selected: state.selectedDay
    }
}

export default connect(mapStateToProps, { chooseDay })(ListDays);