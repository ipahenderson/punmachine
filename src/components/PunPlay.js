import React from 'react';
import ReactDOM from 'react-dom'


export default class PunPlay extends React.Component {
  static defaultProps = {
    src: null,
    autoplay: true
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

    if(this.video || !this.props.src)
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

    var vidDelete = this.video

    vidDelete.addEventListener('durationchange', function() {
      console.log('Duration change', this.duration);

      var vidLength = (Math.round(this.duration) * 1000)
      setTimeout(function () {
        node.removeChild(vidDelete)
      }, vidLength);
  });


  }

  render() {
    return <div ref="videoplayer" />;
  }
}
