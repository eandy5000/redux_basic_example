import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
    render() {
        return (
            <div>
                active book
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(BookDetail)