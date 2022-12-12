import React, { Component } from 'react'

export default class StateEx extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count :0,
       name:"Nitheesh"
    }
  }
  inc=()=>
  {
    this.setState({count:this.state.count+1})
  }
  render() {
    return (<h1>
      <button onClick={this.inc}>&#128077;{this.state.count}</button></h1>
    )
  }
}
