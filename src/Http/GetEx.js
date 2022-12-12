import React, { Component } from 'react'
import axios from 'axios'
export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
     axios.get("https://jsonplaceholder.typicode.com/posts")
     .then(res=>{
        console.log(res);
        this.setState({posts:res.data})
     })
    }
  render() {
    const {posts}=this.state
    return (
      <div>GetEx
      <table>
      <tr>
      <th style={{paddingLeft:"200px",paddingRight:"400px"}}>Id</th>
      <th>Title</th>
      <th>Body</th>
      </tr>
      </table>
      {posts.map
        ((post)=>{ 
            return(
            <tr>
            <td>{post.userId}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            </tr>)}
        )}
      </div>
    )
  }
}
