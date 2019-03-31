import React, { Component } from 'react';

import Header from './components/Header/index'
import Main from './components/Main/index'


class App extends Component {
  render() {
    return (
    <div className='App'>
      <Header />
      <Main />
    </div>
    );
  }
}

export default App;
