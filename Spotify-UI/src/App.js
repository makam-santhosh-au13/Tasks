import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'

import './App.scss'
// import Footer from './components/Footer'

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicControls">music controls</div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
