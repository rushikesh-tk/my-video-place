import React from 'react';
import SearchIcon from '../assets/Search.png';

class SearchBar extends React.Component {

	constructor(props){
		super(props);

		this.state = { term : ""};
	}

	onInputChange = (event) => {
		this.setState({ term : event.target.value });
	}

	render(){
		return (
			<nav className="flex justify-between bg-near-black">
			  <div className="flex-grow pa3 flex items-center">
			  	<label className="db fw6 lh-copy white f4 pr3" htmlFor="Search">Search</label>
        		<input
        			onChange={this.onInputChange}
        			className="pa2 input-reset ba bg-transparent hover-bg-black white w-100"
        			id="Search"
        			style={{width:"300px"}}
        		/>
        		<div className="bg-dark-gray pa1 hover-bg-silver" style={{width:"35px", height:"33px"}}>
        			<img src={SearchIcon} alt="SearchIcon" />
        		</div>
			  </div>
			</nav>
		);
	}
}

export default SearchBar;