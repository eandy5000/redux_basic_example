import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>select an item...</div>
        }
        return <div>
            <h4>{this.props.book.title}</h4>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)