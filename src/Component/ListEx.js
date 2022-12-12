import React, { Component } from 'react'

export default class ListEx extends Component {
  render() 
  {
  const cars=["Toyoto","Swift","Bolero","Mahindra"]
  const listcars = cars.map((i)=>i+"____");
  console.log(listcars);
    return (
      <h1>{listcars}</h1>
    )
    }
    }
