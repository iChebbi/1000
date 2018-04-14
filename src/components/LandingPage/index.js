import React from 'react'

import Header from './Header'
import Form from './Form'
import Conditions from './Conditions'
import Duration from './Duration'
import Location from './Location'
import Content from './Content'
import Partners from './Partners'
import WhereToBegin from './WhereToBegin'
import Footer from './Footer'
import Carousele from './Carousel'
import Opportunities from './Opportunities'
import Links from './Links'
import './landing.css'

// ReactDOM.render(<Links />, document.getElementById('links'))

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page-container">
				<Links/>
        <Header />
        <Form />
        <Conditions />
        <Carousele />
        <Duration />
        <Location />
        <Content />
        <Partners />
        <WhereToBegin />
        <Opportunities />
        <Footer />
      </div>
    )
  }
}

export default LandingPage
