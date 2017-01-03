import React, { Component } from 'react'
import NamesList from '../containers/names_list'
import NameDetail from '../containers/name_detail'


export default class App extends Component {
  render() {
    return (
      <div>
        <NameDetail />
        <NamesList />
      </div>
    )
  }
}
