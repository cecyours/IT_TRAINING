
import React, { Component } from 'react'

export default class Test extends Component {

    constructor(props){
        super(props)
        this.state = {
            username:"user"
        }
    }

    getData(){
        fetch("http://localhost:8009/test")
        .then((res)=>res.text())
        .then((res)=>this.setState({ username: res }))
        .catch((error) => {
            // Handle any errors that occurred during the fetch request
            console.error("Error fetching data:", error);
          });
        console.log("called///")
    }
    sayHome = () =>{
        fetch("http://localhost:8009/test/home")
        .then(res=>res.text())
        .then(res=>this.setState({username:res}))
    }
    sayWork = () =>{

        fetch("http://localhost:8009/test/work")
        .then(res=>res.text())
        .then(res=>this.setState({username:res}))
    }
    componentDidMount(){
        this.getData()
    }
  render() {
    return (
        <>
            <h1>{this.state.username}</h1>
            Kites...

            <div>
                <button onClick={this.sayHome}>Show Home</button>
                <button onClick={this.sayWork}>Show Work</button>
            </div>
        </>
    )
  }
}
