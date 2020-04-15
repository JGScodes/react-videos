import React from 'react';
import VideoItem from './VideoItem';


// const VideoList = (props) => {
//   // props.videos is the array that we render out the html to the screen.
//    return <div>{props.videos.length}</div>
// };

// This does the same as above but with destructuring of the videos prop off the response api object.
// props.onVideoSelect deconstructed here from App
// deconstructing videos and onVideoSelect from the props object
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
     return <VideoItem onVideoSelect={onVideoSelect} video={video}/>;
  })

  return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;
