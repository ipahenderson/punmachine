import React from 'react';
import PunSearch from '../components/PunSearch'
import PunPlay from '../components/PunPlay'


class PunBox extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      videos: require('../data/videos.js'),
      currentVid: {
        src: null,
        pun: '',
        puntime: ''
      },
      vidSearchNo: ""
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

  }

  handleInput(value){
  this.setState({vidSearchNo: value});
  }

  clearVid(){
    this.setState({currentVid: {src:null}})
    this.setState({vidSearchNo: ""})
  }


  render(){
    return(
      <div id="pun-box">
        <PunSearch
          video={this.state.currentVid}
          vidSearchNo={this.state.vidSearchNo}
          onPunSearch={this.handleInput}
          onEnter={this.handleSearch} />
        <PunPlay
          src={this.state.currentVid.src}
          videoText={this.state.currentVid.pun}
          punTime={this.state.currentVid.puntime}
          clearVid={this.clearVid}
          videoSearchNo={this.state.vidSearchNo}/>
      </div>
    )
  }


}

export default PunBox;
