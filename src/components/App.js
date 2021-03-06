import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtubeAxios from '../apis/youtube';


const KEY = 'AIzaSyBIQt5GTFYoSZWJpXEDj8tVuRdITC1Fxa8';

class App extends React.Component {

    state = {
      // always default your state to an empty array if you expect to an array to be an array in the future
      videos: [],
      selectedVideo: null
    }

   componentDidMount() {
     // this empty string passed will get random vids from youtube to display.
     this.onTermSubmit('')
   }

  onTermSubmit = async (term) => {
    // calling the youtube function. Response is now a pre-configured instance of axios.
    const response = await youtubeAxios.get('/search', {
      params: {
        q: term,
          part: "snippet",
          maxResults: 10,
          type: 'video',
          key: KEY
      }
    })
      this.setState({
        videos: response.data.items,
        // this sets the app to have the first item in the response array to be the default video that displays on the screen.
        selectedVideo: response.data.items[0]
      }
        );
  };

  // the video here is the object we fetch from the youtube api
  //Here we define onVideoSelect as a callback that we'll pass down to videoList and VideoItem. When a video gets clicked in VideoItem, that video will be passed upwards to the App.js and it'll play video. When passing a callback down to other components as a reference, have the name of the prop/attribute be the same as as the callback
   onVideoSelect = (video) => {
       this.setState({selectedVideo: video})
  };

  render() {
    return (
     <div className="ui container">
       {/*passing onTermSubmit down to the searchbar component so it can consume the term given to it by the onFormSubmit function that gets the search term from onInputChange function in the searchbar component*/}
      <SearchBar daFormSubmit={this.onTermSubmit}/>
      <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              {/* onVideoSelect is being passed down as a prop to VideoList component  */}
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
       </div>
     </div>)
  }
}

export default App;
