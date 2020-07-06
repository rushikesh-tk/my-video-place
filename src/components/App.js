import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import KEY from '../keys/YoutubeAPI_Key';

class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			videos : []
		};
	}

	onTermSubmit = (term) => {
		fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${term}&key=${KEY}`)
		.then(res => res.json())
		.then(data => {
			//this.setState({ videos : data.items })
	 		console.log(data);
		})
		.catch((error) => {
            console.log("Error: " + error);
        })

	}

	render(){
		return (
			<div>
			<SearchBar onFormSubmit={this.onTermSubmit}/>
			<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

export default App;