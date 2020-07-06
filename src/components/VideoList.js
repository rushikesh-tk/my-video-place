import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect}) => {

	const renderedVideo = videos.map((video) => {
		return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId}/>
	})

	return (
		<div>{renderedVideo}</div>
	);
}

export default VideoList;