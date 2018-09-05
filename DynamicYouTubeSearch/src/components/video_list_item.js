import React from 'react';

const VideoListItem = ({video, onVideoSelect})=>{
                    //props
    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect
    // console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    return ( //this is the onClick function in which the selected (clicked) video information will be pass through
            //this is the deepest nested layer!
        <li onClick={()=> onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;