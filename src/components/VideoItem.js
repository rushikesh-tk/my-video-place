import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
	return (
		<div className="item bg-near-black video-item">
			<img className="ui image pl3" src={video.snippet.thumbnails.medium.url} alt=""/>
			<div className="content pl3 flex flex-column">
				<div className="header pb2"><h3 className="near-white">{video.snippet.title}</h3></div>
				<div className="moon-gray">{video.snippet.description}</div>
				<div className="light-silver">{video.snippet.channelTitle}</div>
				<div className="silver">{video.snippet.publishTime}</div>
			</div>
				
			
		</div>
	);
}

export default VideoItem;