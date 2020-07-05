import React from 'react';
import SearchBar from './SearchBar';
import KEY from '../KEYs/YoutubeAPI_Key';

class App extends React.Component {

	onTermSubmit = (term) => {
		fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${term}&key=${KEY}`)
	}

	render(){
		return (
			<SearchBar onFormSubmit={this.onTermSubmit}/>
		);
	}
}

export default App;