import React from 'react';

// const VideoItem = (props)=> {
//    return <div>Video Item</div>
// };

// video is an 'items' from the response object
const VideoItem = ({ video }) => {
return (
  <div>
    <img src={video.snippet.thumbnails.medium.url} alt={'pic'}/>
    {video.snippet.title}
  </div>
  )
};


export default VideoItem;
