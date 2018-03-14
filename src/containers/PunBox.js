import React from 'react';
import PunSearch from '../components/PunSearch'
import PunPlay from '../components/PunPlay'


class PunBox extends React.Component{

constructor(props){
  super(props)
  this.state = {
    videos: [
      {
        number: 0,
        src: "http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4",
        pun: "MEADIA",
        puntime: 10
      },
      {
        number: 1,
        src: "/videos/0001.mp4",
        pun: "MEADIA",
        puntime: 9
      },
      {
        number: 2,
        src: "/videos/0002.mp4",
        pun: "HANZ DOWN",
        puntime: 7.3
      },
      {
        number: 3,
        src: "/videos/0003.mp4",
        pun: "WRISTY BUSINESS",
        puntime: 7.5
      }
      ],
    currentVid: {
      src: null,
      pun: '',
      puntime: ''
    },
    vidSearchNo: ''
  }
  this.handleSearch = this.handleSearch.bind(this);
  this.handleInput = this.handleInput.bind(this);
  this.clearVid = this.clearVid.bind(this);
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

clearVid(){
  this.setState({currentVid: {src:null}})
}


render(){
  return(
    <div id="pun-box">
      <PunSearch
        video={this.state.currentVid}
        vidSearchNo={this.state.vidSearchNo}
        onPunSearch={this.handleInput}
        onEnter={this.handleSearch} />
      <PunPlay src={this.state.currentVid.src} videoText={this.state.currentVid.pun} punTime={this.state.currentVid.puntime} clearVid={this.clearVid}/>
    </div>
  )
}









}

export default PunBox;
