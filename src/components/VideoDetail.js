import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
	if(!video){
			return <h4>Please Wait While We Are Loading...</h4>
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

	return (
		<div className="bg-near-black">
			<div className="iframe-style">
				<iframe title={video.snippet.title} src={videoSrc}/>
			</div>
			<div className="pa3">
				<h4 className="white">{video.snippet.title}</h4>
				<p className="hot-pink pb4">{video.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetail;
