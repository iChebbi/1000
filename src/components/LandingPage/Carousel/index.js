import React from 'react'
import { Carousel } from 'react-bootstrap'
import './slide.css'

class Carousele extends React.Component {
  render () {
    return (
      <Carousel>
        <Carousel.Item className='img-container'>
          <img alt=""  src='carousel-images/carousel-img-1.jpg' />
          <Carousel.Caption>
            <p>
            Talks about AI, Web and mobile development, Business and much more..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='img-container'>
          <img alt=""  src='carousel-images/carousel-img-2.jpg' />
          <Carousel.Caption>
            <p>
            Weekly events and workshops.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='img-container'>
          <img alt=""  src='carousel-images/carousel-img-3.jpg' />
          <Carousel.Caption>
            <p>
              Full-time and Part-time programs.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Carousele
