import React from 'react';

const VideoDetail = ({video})=>{
    if(!video){
        return <div>Loading...</div>; //loading function if video is not fetched from API use this
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; //ES6 backslash(`) + dollar-sign($) for ID
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>       
        </div>
    ); //this return the first video in the video list
};
export default VideoDetail;