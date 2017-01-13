import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chooseDay } from '../actions/index'

class ListDays extends Component {
    renderList() {
        return this.props.days.map(each => {
            return (
                <div key={each.day}
                     onClick={() => {
                         this.props.chooseDay(each)
                     }}>
                <h6>{each.day}</h6>
                </div>
            )
        })
    }

    render() {
        return <div>
            {this.renderList()}
            </div>
    }
}

function mapStateToProps(state) {
    return {
        days: state.days
    }
}

export default connect(mapStateToProps, { chooseDay })(ListDays)