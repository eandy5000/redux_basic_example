import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListDays extends Component {
    renderList() {
        return this.props.days.map(each => {
            return <h6 key={each.day} >{each.day}</h6>
        })
    }

    render() {
        return <div>
            ListDays
            {this.renderList()}
            </div>
    }
}

function mapStateToProps(state) {
    return {
        days: state.days
    }
}

export default connect(mapStateToProps)(ListDays)