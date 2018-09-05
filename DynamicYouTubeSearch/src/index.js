import React, { Component } from 'react'; //create components 
import ReactDOM from 'react-dom'; //interact with DOM
import _ from 'lodash';
import YTSearch from 'youtube-api-search'; //youtube api package installed
const API_KEY = 'AIzaSyA09BYx_Lju5P2pfiuMI25VJ3rvzxuG2Tk'; //YouTube API key
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//Creating a new component. Component should produce some HTML 
class App extends Component {
  constructor(props) { //does its function as nginit?
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null 
    };
    this.videoSearch('surfboard');
  }
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos)=>{
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      }); //data is videoes 
      //same as this.setState({ videos:videos });
      //notice how key and property are same name thus ES6 can be just one variable
    });
  }
  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300); //using lodash to add 300milisec of artificial load time/thorttling 
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo=>this.setState({selectedVideo})} 
          videos={this.state.videos} /> 
      </div>
    ); //video list has a passing prop!
      //video list now has a passing function where it will set state of the video selected(or clicked)
  } //JSX 
}
//Take this component's generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //producing instances 
                    //second pass through the target component to render