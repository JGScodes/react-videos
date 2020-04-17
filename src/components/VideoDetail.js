import React from 'react';

// const VideoDetail = (props) => {
// return <div>{props.video}</div>
// }

// Deconstruction of props.video
const VideoDetail = ({ video }) => {

  if(!video) {
    return <div>Loading...</div>
  }

  return (
     <div>
       <div className="ui segment">
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
       </div>
     </div>
  )
}

export default VideoDetail;
