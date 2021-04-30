import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom";

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      names: []
      
    }
  }
  componentDidMount() {
    const url = "https://api.jsonbin.io/b/60882ce55210f622be3b4768";
   
    fetch(url) 
      .then(data => data.json())
      .then(data => this.setState({ names: data.dogs}))
    }
  
  render() {
    const { names } = this.state;

    return(
      <div className="container">
        <div className="jumbotron">
        <h1 className="display-1">Doggy daycare: </h1>
        </div>
        <div className="users">
          {names.map((user) => (
            <div className="card" key={user.chipNumber}>
            <img src={user.img} className="card-img-top" alt={`${user.name} img`} />
            <div className="card-body">
              <h5 className="card-DogName">{user.name} </h5>
             <Link href="#" className="btn btn-primary" to={"/Dogs/"+user.chipNumber}>More about this friend</Link> 
            </div>
            </div>

          ))}
              </div>
          </div>
    )
  }
 
}
  
export default Register;