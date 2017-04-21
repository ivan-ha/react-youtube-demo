import React from 'react';

const VideoDetail = ({video}) => {
    // To protect if video data is not yet available
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoTitle = video.snippet.title;
    const videoDescription = video.snippet.description;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={url}></iframe>
            </div>
            <div className='details'>
                <div><strong>{videoTitle}</strong></div>
                <div>{videoDescription}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
