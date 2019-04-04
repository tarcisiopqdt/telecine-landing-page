import React, { Component } from 'react'
import axios from 'axios'

import Header from '../../components/Header/index'
import Main from '../../components/Main/index'
import Footer from '../../components/Footer/index'


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      devices: [{
        title: "Assista na TV",
        urlImg: "https://i.ytimg.com/vi/WC21cAJeerc/sddefault.jpg",
        list: [
          "Smart TVs",
          "Xbox One",
          "Chomecast"
        ]
      }, {
        title: "Em Smartphones",
        urlImg: "https://i.ytimg.com/vi/mT-7mntAyWI/sddefault.jpg#404_is_fine",
        list: [
          "IOS",
          "Android",
          "Windows phone"
        ]
      }, {
        title: "Ou onde quiser",
        urlImg: "https://i.ytimg.com/vi/IKyH2s_MlCQ/sddefault.jpg?v=5b366c69",
        list: [
          "Eu",
          "na Telecine ?",
          "♥"
        ]
      }],
      bgImg: "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27176535%27&EntityType=%27Item%27&EntityId=%2710171%27&Width=1920&Height=640&device=web_browser&subscriptions=Anonymous",
      populares: []
    }
  }


  async componentWillMount() {
    const url = "populares.json"
    const response = await axios.get(url)
    this.setState({ populares: response.data.data })
  }



  render() {
    return (
      <>
        <Header bgImg={this.state.bgImg} />
        <Main populares={this.state.populares} devices={this.state.devices}/>
        <Footer />
      </>
    );
  }
}

export default Home;