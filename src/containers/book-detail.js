import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <h6>select an item</h6>
        }
        return (
            <h6>{this.props.book.title}</h6>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)