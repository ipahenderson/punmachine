import React from 'react';
import ReactDOM from 'react-dom'
import scrollToComponent from 'react-scroll-to-component';


export default class PunPlay extends React.Component {
  static defaultProps = {
    src: null,
    width: 200,
    height: 100,
    autoplay: true
  }

  componentDidMount() { this.loadVideo(); }
  componentDidUpdate() { this.loadVideo(); }




  loadVideo = () => {

    function scrollFunc()
    {
      document.getElementsByClassName('video-play')[0].scrollIntoView({block:"center"});
    }

    if(this.video || !this.props.src)
    return;

    let node = ReactDOM.findDOMNode(this.refs.videoplayer);
    if(!node)
    return;

    this.video = document.createElement('video');
    this.video.src = this.props.src;
    // this.video.width = this.props.width;
    // this.video.height = this.props.height;
    this.video.className = "video-play";

    this.video.autoplay = true;
    node.appendChild(this.video);
    scrollFunc()
    console.log(document.getElementsByClassName('video-play')[0]);
  }

  render() {
    return <div ref="videoplayer" />;
  }
}
