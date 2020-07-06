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

	onSearchClick = () => {
		this.props.onFormSubmit(this.state.term)
	}

	render(){
		return (
			<nav className="flex justify-between bg-black-90">
			  <div className="flex-grow pa3 flex items-center">
			  	<label className="db fw6 lh-copy hot-pink f4 pr3" htmlFor="Search">My Video Place</label>
        		<input
        			onChange={this.onInputChange}
        			className="pa2 input-reset ba bg-transparent hover-bg-black white w-100"
        			id="Search"
        		/>
        		<div 
        			onClick={this.onSearchClick}
        			className="bg-dark-gray pa1 hover-bg-silver flex " 
        			style={{width:"50px", height:"33px"}}
        		>
        			<img src={SearchIcon} alt="SearchIcon" />
        		</div>
			  </div>
			</nav>
		);
	}
}

export default SearchBar;