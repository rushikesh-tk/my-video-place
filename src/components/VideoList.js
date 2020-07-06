import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect}) => {

	const renderedVideo = videos.map((video) => {
		return <VideoItem video={video} onVideoSelect={onVideoSelect}/>
	})

	return (
		<div>{renderedVideo}</div>
	);
}

export default VideoList;