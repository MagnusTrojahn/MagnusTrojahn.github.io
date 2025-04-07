import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import pollenImage from '../assets/pollencollector2.jpg';
import pollenImage2 from '../assets/pollen collector 3.jpg';
import pollenImage3 from '../assets/Pollen-collector.jpg';
import Header from './Header';

export function ProjectPollen() {
  return (
    <>
    
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card style={{ backgroundColor: '#F5F5DC' }} className="my-4">
              <Card.Body>
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <ExampleCarouselImage src={pollenImage} alt="Pollen Collector 1" />
                    <Carousel.Caption>
                      <h3>Pollen Collector Design</h3>
                      <p>Initial design of the pollen collector device</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <ExampleCarouselImage src={pollenImage2} alt="Pollen Collector 2" />
                    <Carousel.Caption>
                      <h3>Device Assembly</h3>
                      <p>Building and testing the collector components</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <ExampleCarouselImage src={pollenImage3} alt="Pollen Collector 3" />
                    <Carousel.Caption>
                      <h3>Final Product</h3>
                      <p>Completed pollen collector ready for testing</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <Card.Text className="mt-4">
                  <h4>Project Overview</h4>
                  <p>
                    This project involves building a pollen collector and developing an object detection model to identify and analyze pollen in microscopic images. The goal is to create an automated system that can help in pollen monitoring and analysis.
                  </p>
                  <h4>Technical Details</h4>
                  <ul>
                    <li>Custom-built pollen collector device</li>
                    <li>Object detection model for pollen identification</li>
                    <li>Microscopic image analysis system</li>
                    <li>Data collection and analysis pipeline</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectPollen; 