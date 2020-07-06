import React from 'react';

const VideoDetail = ({ video }) => {
	if(!video){
			return <h4>Loading...</h4>
	}

	return (
		<div className="bg-near-black pa3">
			<div>
				<h4 className="white">{video.snippet.title}</h4>
				<p className="hot-pink">{video.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetail;
