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
    var t = this;
    let nodeText = ReactDOM.findDOMNode(container);


    function videoTextDisplay(){
      if(!t.props.src)
      return;

      const textIn = "#" + t.props.videoSearchNo + " " + t.props.videoText
      t.textOut = document.createElement('h1');
      t.textOut1 = document.createElement('h1');
      t.textOut2 = document.createElement('h1');

      t.textOut.className = "video-text";
      t.textOut1.className = "video-text1";
      t.textOut2.className = "video-text2";

      nodeText.appendChild(t.textOut);
      nodeText.appendChild(t.textOut1);
      nodeText.appendChild(t.textOut2);

      var tText = t;

      setTimeout(function () {
        tText.textOut.innerText = textIn
        tText.textOut1.innerText = textIn
        tText.textOut2.innerText = textIn
      }, tText.props.punTime * 1000);
    }



    if(!this.props.src)
    return;

    let node = ReactDOM.findDOMNode(this.refs.videoplayer);
    if(!node)
    return;
    //Create Video
    this.video = document.createElement('video');
    this.video.src = this.props.src;
    this.video.className = "video-play";
    this.video.autoplay = true;
    node.appendChild(this.video);

    scrollFunc()
    videoTextDisplay()

    //Video Deletion
    this.props.clearVid()
    var vidDelete = this.video

    vidDelete.addEventListener('durationchange', function() {
      var vidLength = (Math.round(this.duration) * 1000)
      setTimeout(function () {
        node.removeChild(vidDelete)
        while (nodeText.hasChildNodes()) {
          nodeText.removeChild(nodeText.lastChild);
          }
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
