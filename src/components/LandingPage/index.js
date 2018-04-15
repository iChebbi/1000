import React from 'react'
import Form from './Form'
import Conditions from './Conditions'
import Duration from './Duration'
import Location from './Location'
import Content from './Content'
import Links from './Links'
import Partners from './Partners'
import WhereToBegin from './WhereToBegin'
import Footer from './Footer'
import Opportunities from './Opportunities'
import './landing.css'
import NavBar from '../Platform/NavBar/NavBar';

class LandingPage extends React.Component {
  render () {
    return (
      <div className='landing-page-container'>
				<Links />
        <NavBar />
        <Form />
        <Conditions />
        <WhereToBegin />
        <Duration />
        <Location />
        <Content />
        <Opportunities />
        <Partners />
        <Footer />
      </div>
    )
  }
}

export default LandingPage
