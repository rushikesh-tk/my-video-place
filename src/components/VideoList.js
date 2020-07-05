import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {

	const renderedVideo = videos.map((video) => {
		return <VideoItem video={video}/>
	})

	return (
		<div>{renderedVideo}</div>
	);
}

export default VideoList;