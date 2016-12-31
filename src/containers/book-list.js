import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectItem } from '../actions/'

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    onClick={() => {
                        this.props.selectItem(book)
                    } }
                    key={book.title} >{book.title}</li>
            )
        })
    }
    
    render() {
        return (<ul>
            {this.renderList()}
        </ul>)
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
        activeBook: state.activeBook
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectItem: selectItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)