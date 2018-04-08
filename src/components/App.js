import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import './style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
				<Content/>
        <Footer />
      </div>
    )
  }
}

export default App
