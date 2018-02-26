import React from 'react';
import PunSearch from '../components/PunSearch'
import PunPlay from '../components/PunPlay'


class PunBox extends React.Component{


constructor(props){
  super(props)
  this.state = {
    videos: ["index", "http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4", "vid2", "vid3"],
    currentVid: null,
    vidSearchNo: ''
  }
  this.handleSearch = this.handleSearch.bind(this);
  this.handleInput = this.handleInput.bind(this);
}


handleSearch(){
  if(this.state.vidSearchNo > this.state.videos.length){
    this.setState({currentVid: null});
    this.setState({vidSearchNo: ''})
    return
  }
  const selectedVid = this.state.videos[this.state.vidSearchNo];
  this.setState({currentVid: selectedVid});
  this.setState({vidSearchNo: ''})
}

handleInput(value){
this.setState({vidSearchNo: value});
}


render(){
  return(
    <div id="pun-box">
      <PunSearch
        video={this.state.currentVid}
        vidSearchNo={this.state.vidSearchNo}
        onPunSearch={this.handleInput}
        onEnter={this.handleSearch} />
      <PunPlay src={this.state.currentVid}/>
    </div>
  )
}









}

export default PunBox;
