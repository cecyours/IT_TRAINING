import React, { Component } from "react";
import axios from 'axios'
export default class SignUp extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            userName:"Kuldeep",
            userEmail:"kullu@i.com",
            userPass:"harhar4me",
        }
    }

    handleChangeEvent = (e)=>{

        // console.log(e.target.value)
        const {name,value} = e.target
        
        this.setState({[name]:value})
        // console.log(className)

    }

    handleSubmit = (e) =>{
        e.preventDefault();
        var user= JSON.stringify(this.state);
        console.log("submited. "+user)
        
        // send this data to server.
        axios.post("http://localhost:8009/users/create",{data:user})
        .then((response)=>{
            console.log(response.data)
        })
    }
  render() {
    return (
      <>
        <section className="m-5">
          <form action="" method="post" onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                User Name :{" "}
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="ei. Mohan Das"
                className="form-control"
                value={this.state.userName}
                onChange={this.handleChangeEvent}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">
                User Email :{" "}
              </label>
              <input
                type="text"
                id="userEmail"
                name="userEmail"
                placeholder="ei. mohan@yours.com"
                className="form-control"

                value={this.state.userEmail}
                onChange={this.handleChangeEvent}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="userPass" className="form-label">
                User Pass :{" "}
              </label>
              <input
                type="text"
                id="userPass"
                name="userPass"
                placeholder="ei. yourd123"
                className="form-control"

                value={this.state.userPass}
                onChange={this.handleChangeEvent}
              />
            </div>

            <div className="mb-3">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
            
          </form>
        </section>
      </>
    );
  }
}
