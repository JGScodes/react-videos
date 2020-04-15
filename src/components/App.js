import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtubeAxios from '../apis/youtube';


class App extends React.Component {

    state = {
      // always default your state to an empty array if you expect to an array to be an array in the future
      videos: []
    }
  onTermSubmit = async (term) => {
    // calling the youtube function. This s now a pre-configured instance of axios
    const response = await youtubeAxios.get('/search', {
      params: {
        q: term
      }
    })
      this.setState({videos: response.data.items});
  }
  render() {
    return (
     <div className="ui container">
       <SearchBar onFormSubmit={this.onTermSubmit}/>
       <VideoList videos={this.state.videos}/>
     </div>)
  }
}

export default App;
