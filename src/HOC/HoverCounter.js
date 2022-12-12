import React, { Component } from 'react'
import EnComponent from './Hoc'
class HoverCounter extends Component {
  render() {
    const{count,incre}=this.props
    return (
      <div>
      <h1 onClick={incre}>Hover{count}</h1>
      </div>
    )
  }
}
export default EnComponent(HoverCounter);
