import React from 'react';
import PunSearch from '../components/PunSearch'


class PunBox extends React.Component{


constructor(props){
  super(props)
  this.state = {
    videos: ["vid1", "vid2", "vid3"],
    currentVid: null,
    vidSearchNo: ''
  }
  this.handleVideo = this.handleVideo.bind(this);
  this.handleInput = this.handleInput.bind(this);
}


handleVideo(){
  console.log(this.state.videos);
  if(this.state.vidSearchNo > this.state.videos.length){
    return
  }
  const selectedVid = this.state.videos[this.state.vidSearchNo];
  this.setState({currentVid: selectedVid});
  this.state.vidSearchNo = '';
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
        onEnter={this.handleVideo} />
    </div>
  )
}









}

export default PunBox;
