import React from 'react';
import VideoItem from './VideoItem';


// const VideoList = (props) => {
//   // props.videos is the array that we render out the html to the screen.
//    return <div>{props.videos.length}</div>
// };

// This does the same as above but with destructuring of the videos prop off the reponse api object
const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
     return <VideoItem video={video}/>;
  })

  return <div>{renderedList}</div>
};

export default VideoList;
