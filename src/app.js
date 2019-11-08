import React, { Component } from 'react'
import AOS from 'aos'

import Routes from './layouts'
import { aosConfig } from './utils/aosConfig'

class App extends Component {
  componentDidMount () {
    AOS.init(aosConfig)
  }

  render () {
    return (
      <div className='app'>
        <Routes />
      </div>
    )
  }
}

export default App
