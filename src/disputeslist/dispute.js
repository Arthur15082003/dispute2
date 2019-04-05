import React, { Component } from 'react';
import '../Login/login.css';

// import styled from 'styled-components';  

// var  disputeCount= 0; 
import './dispute.css';

class Disputes extends Component {

	state = {
		toggle: false,
		disputeArr: [],
		name: '',
		about: '',
		money: '',
		btntext: 'Add',
	}

	toggle = () => {
		this.setState({toggle: !this.state.toggle})
		if(this.state.toggle)
			this.state.btntext = 'Add';
		else
			this.state.btntext = 'Close';
	};

	handleNameChange = (e) => {
		this.setState({name: e.target.value});
	};

	handleAboutChange = (e) => {
		this.setState({about: e.target.value});
	};

	handleMoneyChange = (e) => {
		this.setState({money: e.target.value});
	};

	btnInfo = () => {
		const { name, about, money, disputeArr } = this.state;
		const item = {
			name,
			about,
			money
		};

		this.setState({
			disputeArr: [...disputeArr, item],
			name: '',
			about: '',
			money: ''
		}, () => {
			console.log('My array', this.state.disputeArr)
		});
	};
	render() {
		return(
			<div className="diputes">
				<h1 className="h1size">Here you can find disputes. You can also create a new dispute.</h1>
				{this.showList}
				<button className="addbtn" onClick={this.toggle}>{this.state.btntext}</button>
				
				
				{this.state.toggle &&
					<div className="createDispute">
						<h1 className="h1size">Please fill in</h1>
						<p className="container">Please write name of dispute</p>
						<input className="container" type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.name} />
						<p className="container">Please write about of dispute</p>
						<textarea required className="AboutInput" type="text" placeholder="About" onChange={this.handleAboutChange} value={this.state.about} />
						<p className="container">Please write money</p>
						<input className="container" type="Number" placeholder="money" onChange={this.handleMoneyChange} value={this.state.money} /> <br />
						<button className="lastAdd" onClick={this.btnInfo}>Add</button>
						<div className="allElements">
							<span className="disputesTitle">Name of disputes</span><br />
							{this.state.disputeArr.map((elem, i) => (
								<div key={i}>
									<div className="container">
										{elem.name}
									</div><br /> 
									<div className="showAbout">
										{elem.about}
									</div><br />
									<div className="container">
										{elem.money}
									</div>
							    </div>
							))}
						</div>
					</div>
				}
			</div>
		);
	}		
	
}


export default Disputes;

