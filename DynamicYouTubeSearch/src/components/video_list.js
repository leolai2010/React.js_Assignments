import React from 'react';
import VideoListItem from './video_list_item';

const VideoList= (props)=>{
    // const videos = props.videos
    const videoItems = props.videos.map((video)=>{ //maping allowing for looping of the objects in array
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect} 
                key={video.etag} 
                video={video} />
        ); //here the passed in function onVideoSelect is grabbing the info from VideoListItem
    });
    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
//var array = [1, 2, 3];
//array.map(function(number){ return number });
