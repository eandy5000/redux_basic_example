import React, { Component } from 'react'
import { connect } from 'react-redux'

class NameDetail extends Component {
    render() {
        if(!this.props.name) {
            return <p>select name...</p>
        }
        return (
            <h3>{this.props.name.name}</h3>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps)(NameDetail)