import React, { Component } from 'react';
import {
  NavLink,
} from 'react-router-dom'

class Login extends Component {
  // lifecycles
  componentDidMount() {
    console.log("Did Mount");
  }
  componentDidUpdate() {
    console.log("updating");
  }
  // functions here
  
  render() {
    return (
      <div className="row margin-top">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6 offset-s3">
              <i className="material-icons prefix">email</i>
              <input id="icon_prefix" type="text" className="validate"/>
              <label htmlFor="icon_prefix">correo electrónico</label>
            </div>
          </div>
          <div className="row">
          <div className="input-field col s6 offset-s3">
            <i className="material-icons prefix">create</i>
            <input id="icon_telephone" type="tel" className="validate"/>
            <label htmlFor="icon_telephone">contraseña</label>
          </div>
        </div>
        <div className="center-align">
        <NavLink to={"/Sprints"}  className="waves-effect waves-light btn">LOGIN</NavLink>
         </div>
       </form>
     </div>
    )
  }
}

// Default Props here

export default Login;
