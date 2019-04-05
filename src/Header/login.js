import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './login.css'

class LoginIcon extends Component {
	render() {
		return(
			<div>
				<NavLink className="loginBtn" to="/login">Login</NavLink>
				<NavLink className="backBtn" to="/general">Back</NavLink>
			</div>
			);
	}
}

export default LoginIcon;