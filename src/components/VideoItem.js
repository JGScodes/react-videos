import React from 'react';
import './VideoItems.css';

// const VideoItem = (props)=> {
//    return <div>Video Item</div>
// };

// video is an 'items' from the response object
const VideoItem = ({ video , onVideoSelect}) => {
    return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img className="ui image"src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
        < div className="content">
          <div style={{color: '#fff'}}className="header">{video.snippet.title}</div>
        </div>
      </div>
      )
};


export default VideoItem;
