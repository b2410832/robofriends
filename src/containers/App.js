import React, { Component } from 'react';
import CardList from '../components/CardList.js'; //is exported as default 
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
//import { robots } from './robots.js'; //is not exported as default
import './App.css';


//state: an "object" that describes your application that can change and affect it, lives in parent, passed to children component.
//要用class類別元件才能使用state
//class類別元件是"object"因此要用this
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users') //AJAX request
			.then(response => response.json()) //A promise - making a request to the internet and prmise to let you know when this value return/
			.then(users => this.setState({ robots: users}));
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value }) //update state
	}

	render() {
		const {robots, searchfield} = this.state;
		const filterdRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (robots.length === 0){
			return <h1>Loading</h1>
		} else {
			return (
			<div className='tc'>
				<h1 className='f1'> RoboFriends </h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filterdRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
			);
		}
	}
}





export default App;