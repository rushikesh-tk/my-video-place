import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import KEY from '../keys/YoutubeAPI_Key';
import M from 'materialize-css';
class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			videos : [],
			selectedVideo : null
		};
	}

	onTermSubmit = (term) => {
		if(term){
		fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${term}&key=${KEY}`)
		.then(res => res.json())
		.then(data => {
				this.setState({ videos : data.items })
			})
		.catch((error) => {
            	console.log("Error: " + error);
        	})
		}
		else{ M.toast({ html: `<h3>Please Enter Search Query!</h3>`})
		}
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo : video })
	}

	render(){
		return (
			<div>
			<SearchBar onFormSubmit={this.onTermSubmit}/>
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
			</div>
		);
	}
}

export default App;