import React , { Component } from 'react'

import Header from '../../components/Header/index'
import Main from '../../components/Main/index'
import Footer from '../../components/Footer/index'


class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bgImg: "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27176535%27&EntityType=%27Item%27&EntityId=%2710171%27&Width=1920&Height=640&device=web_browser&subscriptions=Anonymous"
    }
  }


  render() {
    return (
      <>
        <Header 
        bgImg={this.state.bgImg} 
        />
        <Main />
        <Footer />
      </>
    );
  }
}

export default Home;