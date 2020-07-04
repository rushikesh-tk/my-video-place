import React from 'react';
import SearchBar from './SearchBar';


class App extends React.Component {

	onTermSubmit = (term) => {
		console.log(term);
	}

	render(){
		return (
			<SearchBar onFormSubmit={this.onTermSubmit}/>
		);
	}
}

export default App;