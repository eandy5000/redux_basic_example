import React, { Component } from 'react'
import { connect } from 'react-redux'

class DayDetail extends Component {
    render() {
        if(!this.props.day) {
            return <div>Select a day...</div>
        }
        return <div>DayDetail { this.props.day.day} </div>
    }
}

function mapStateToProps(state) {
    return {
        day: state.day
    }
}

export default connect(mapStateToProps)(DayDetail)