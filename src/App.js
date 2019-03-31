import React, { Component } from 'react';

import Header from './components/Header/index'
import Main from './components/Main/index'


class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      imgtablet: "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27172823%27&EntityType=%27Item%27&EntityId=%2710156%27&Width=1200&Height=900&device=web_browser&subscriptions=Anonymous",
      imgdesktop: "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27172847%27&EntityType=%27Item%27&EntityId=%2710156%27&Width=1920&Height=640&device=web_browser&subscriptions=Anonymous"
    }
  }

  

  render() {
    return (
    <div className='App'>
      <Header imgDesktop={this.state.imgdesktop} imgTablet={this.state.imgtablet}/>
      <Main />
    </div>
    );
  }
}

export default App;
