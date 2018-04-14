import React from 'react'
import { Carousel } from 'react-bootstrap'
import './slide.css'

class Carousele extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img alt="" src="image-loa.png" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="img-container">
          <img alt="" className="img" src="image-loa.png" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" src="image-loa.png" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Carousele
