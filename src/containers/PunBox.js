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
        puntime: '',
        type: ''
      },
      vidSearchNo: '',
      previousType: '',
      deleteInt: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.clearVid = this.clearVid.bind(this);
  }


  handleSearch(){
    var t = this;
    function getRandomInt(max) {
      var randomNum = Math.floor(Math.random() * Math.floor(max));


      if(randomNum < 1 || randomNum >= t.state.videos.length){
      randomNum = Math.floor(Math.random() * Math.floor(max));
      }
      this.setState({deleteInt: randomNum});
      return randomNum

    }

    // if(this.state.vidSearchNo > (this.state.videos.length)){
    //   this.setState({currentVid: null});
    //   this.setState({vidSearchNo: ''})
    //   return
    // }

    var searchNo = Math.floor(Math.random() * Math.floor(this.state.videos.length))
    var selectedVid = this.state.videos[searchNo];
    if (selectedVid.type === this.state.previousType)
    {
      var randomInt = getRandomInt((this.state.videos.length));
      selectedVid = this.state.videos[randomInt]
    }

    this.setState({previousType: selectedVid.type});
    this.setState({currentVid: selectedVid});

  }

  handleInput(value){
  this.setState({vidSearchNo: value});
  }

  clearVid(){
    this.setState({currentVid: {src:null}})
    this.setState({vidSearchNo: ""})
    this.state.videos.splice(this.state.deleteInt, 1)
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
