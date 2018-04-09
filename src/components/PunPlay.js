import React from 'react';
import ReactDOM from 'react-dom'


export default class PunPlay extends React.Component {
  static defaultProps = {
    src: null,
    videoText: null,
    videoSearchNo: null,
    autoplay: true,
    display: ''
  }

  componentDidMount() { this.loadVideo(); }
  componentDidUpdate() { this.loadVideo(); }


//load vid
  loadVideo = () => {

    function scrollFunc()
    {
      var vid = document.getElementsByClassName('video-play')[0]
      if(vid){
        vid.scrollIntoView({block:"center"});
      }
    }

    var container = this.refs.videotexts
    var timethis = this;
    let nodeText = ReactDOM.findDOMNode(container);



    function videoTextDisplay(){
      if(!timethis.props.src)
      return;

      const textIn = "#" + timethis.props.videoSearchNo + " " + timethis.props.videoText
      timethis.textOut = document.createElement('h1');
      timethis.textOut1 = document.createElement('h1');
      timethis.textOut2 = document.createElement('h1');

      timethis.textOut.className = "video-text";
      timethis.textOut1.className = "video-text1";
      timethis.textOut2.className = "video-text2";

      nodeText.appendChild(timethis.textOut);
      nodeText.appendChild(timethis.textOut1);
      nodeText.appendChild(timethis.textOut2);

      var timethis2 = timethis;

      setTimeout(function () {
        timethis2.textOut.innerText = textIn
        timethis2.textOut1.innerText = textIn
        timethis2.textOut2.innerText = textIn
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

    node.appendChild(this.video);

    scrollFunc()
    videoTextDisplay()

    this.props.clearVid()
    var vidDelete = this.video
    var textDelete = timethis.textOut
    var textDelete1 = timethis.textOut1
    var textDelete2 = timethis.textOut2
    vidDelete.addEventListener('durationchange', function() {

      var vidLength = (Math.round(this.duration) * 1000)
      setTimeout(function () {
        node.removeChild(vidDelete)
        nodeText.removeChild(textDelete)
        nodeText.removeChild(textDelete1)
        nodeText.removeChild(textDelete2)

        .focus()
      },(vidLength + 1000));

      });

  }

  render() {
      return (
        <div>
          <div ref="videoplayer"></div>
          <div ref="videotexts"></div>
                </div>
      )
    }
}
