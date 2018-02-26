import React from 'react';
import ReactDOM from 'react-dom'


export default class PunPlay extends React.Component {
  static defaultProps = {
    src: null,
    videoText: null,
    autoplay: true,
    display: ''
  }

  componentDidMount() { this.loadVideo(); }
  componentDidUpdate() { this.loadVideo(); }



  loadVideo = () => {

    function scrollFunc()
    {
      var vid = document.getElementsByClassName('video-play')[0]
      if(vid){
        vid.scrollIntoView({block:"center"});
      }
    }

    var container = this.refs.videotext
    var timethis = this;
    let nodeText = ReactDOM.findDOMNode(container);


    function videoTextDisplay(){
      const textIn = timethis.props.videoText


      timethis.textOut = document.createElement('h1');
      nodeText.appendChild(timethis.textOut);
      var timethis2 = timethis;

      setTimeout(function () {
        console.log(timethis2.props.punTime);
        timethis2.textOut.innerText = textIn
      }, timethis2.props.punTime * 1000);

    }

    if(!this.props.src)
    return;

    let node = ReactDOM.findDOMNode(this.refs.videoplayer);
    if(!node)
    return;

    this.video = document.createElement('video');
    this.video.src = this.props.src;
    this.video.className = "video-play";
    this.video.autoplay = true;
    console.log(this.video.autoplay);
    node.appendChild(this.video);

    scrollFunc()
    videoTextDisplay()

    this.props.clearVid()
    var vidDelete = this.video
    var textDelete = timethis.textOut
    vidDelete.addEventListener('durationchange', function() {
      console.log('Duration change', this.duration);
      var vidLength = (Math.round(this.duration) * 1000)
      setTimeout(function () {
        node.removeChild(vidDelete)
        nodeText.removeChild(textDelete)
      },(vidLength + 1000));

      });


    }

    render() {

      return (
        <div>
          <div ref="videoplayer"></div>
          <div ref="videotext" className="video-text"></div>
        </div>
      )
    }
  }
