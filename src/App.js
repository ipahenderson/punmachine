import React, { Component } from 'react';
import PunBox from './containers/PunBox'

class App extends Component {
  render() {
    document.title = "PUNMACHINE"
    return (
<PunBox />
    );
  }
}

export default App;
