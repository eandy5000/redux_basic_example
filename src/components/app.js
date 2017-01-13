import React, { Component } from 'react'
import ListDays from '../containers/days_list'
import DayDetail from '../containers/day_detail'



export default class App extends Component {
  render() {
    return (
      <div>
      <DayDetail />
      <ListDays />
      </div>
    )
  }
}
