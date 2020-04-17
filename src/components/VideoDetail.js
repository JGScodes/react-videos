import React from 'react';

// const VideoDetail = (props) => {
// return <div>{props.video}</div>
// }

// Deconstruction of props.video
const VideoDetail = ({ video }) => {

  if(!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
     <div>
       <div className="ui embed">
         <iframe src={videoSrc} title="video player"/>
       </div>
       <div className="ui segment" style={{backgroundColor: '#181818'}}>
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
       </div>
     </div>
  )
}

export default VideoDetail;
