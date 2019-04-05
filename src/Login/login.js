import React, { Component } from 'react';
import './login.css';

class Login extends Component {
	state = {
		toggle: false,
		btnName: 'Register',
		firstName: '',
		secondName: '',
		mail: '',
		password: '',
		rePassword: '',

	};

	btnClick = () => {
		this.setState({toggle: !this.state.toggle});
		if(this.state.toggle)
			this.state.btnName = 'Register';
		else
			this.state.btnName = 'Close';
	};

	//  ------------------- Register -------------------

	handleFirstNameChange = (fname) => {
		this.setState({firstName: fname});
	};

	handleSecondNameChange = (sname) => {
		this.setState({secondName: sname});
	};

	handleMailChange = (m) => {
		this.setState({mail: m});
	};

	handlePasswordChange = (ps) => {
		this.setState({password: ps});
	};

	handleRePasswordChange = (ps) => {
		this.setState({rePassword: ps});
	};

	registerClick = () => {
		const {firstName, secondName, mail, password, rePassword} = this.state;
		if( this.state.password != this.state.rePassword )
			alert('Password not coincide');
		else {

		}
	}

	
	render() {
		return(
			<div>
				<span className="container">Login or Email</span><br />
				<input className="container" type="text" placeholder="Login" /><br />
				<span className="container">Password</span><br />
				<input className="container" type="password" placeholder="Password" /><br />

				<h1 className="h1size">Doesn't have acount? You can Register!</h1><br />
				<button className="regBtn" onClick={this.btnClick}>{this.state.btnName}</button><br />
				{this.state.toggle &&
					<div>
						<h1 className="h1size">Here you can register! Please fill in!</h1><br />
						<p className="container">First Name</p><br />
						<input className="container" type="text" placeholder="First Name" onChange={this.handleFirstNameChange} /><br />
						<p className="container">Second Name</p><br />
						<input className="container" type="text" placeholder="Second Name" onChange={this.handleSecondNameChange} /><br />
						<p className="container">E-mail</p><br />
						<input className="container" type="" placeholder="E-mail" onChange={this.handleMailChange} /><br />
						<p className="container">Password</p><br />
						<input className="container" type="password" placeholder="password" onChange={this.handlePasswordChange} /><br />
						<p className="container">Repeat password</p>
						<input className="container" type="password" placeholder="password" onChange={this.handleRePasswordChange} /><br />
						<button className="lastRegisterbtn" onClick={this.registerClick}>Register</button>
					</div>
				}

			</div>
			);
	}
}

export default Login;