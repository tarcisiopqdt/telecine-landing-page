import React, { Component } from 'react';

import Header from './components/Header/index'
import Main from './components/Main/index'
import Footer from './components/Footer/index'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      imgtablet: "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27171966%27&EntityType=%27Item%27&EntityId=%2710171%27&Width=1200&Height=899&device=web_browser&subscriptions=Anonymous",
      imgdesktop: "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27176535%27&EntityType=%27Item%27&EntityId=%2710171%27&Width=1920&Height=640&device=web_browser&subscriptions=Anonymous"
    }
  }



  render() {
    return (
      <div className='App'>
        <Header 
          imgDesktop={this.state.imgdesktop} 
          imgTablet={this.state.imgtablet} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
