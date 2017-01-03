import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectItem } from '../actions/index'
import { bindActionCreators } from 'redux'


class NamesList extends Component {
    renderList() {
        
        return this.props.names.map(name => {
            return <li 
                onClick={() => {
                    this.props.selectItem(name)
                }}
                key={name.name}>
                { name.name }
            </li>
        })
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        names: state.names
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectItem: selectItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NamesList)