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
    </div>
  )
}









}

export default PunBox;
