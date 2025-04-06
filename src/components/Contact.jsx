import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from './Header';
import githubImage from '../assets/githubimg.png';
import linkedinImage from '../assets/linkedinimg.png';

export function Contact() {
  // Social media container styles
  const socialMediaContainerStyle = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0'
  };

  // Social media image styles
  const socialMediaImageStyle = {
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'scale(1.1)'
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card style={{ backgroundColor: '#EFF3EA' }} className="my-4">
              <Card.Body>
                <Card.Title className="text-center mb-4">Contact Me</Card.Title>
                <div className="text-center mb-4">
                  <a 
                    href="mailto:magnustrojahn@gmail.com"
                    style={{ 
                      textDecoration: 'none',
                      color: '#2c3e50',
                      fontSize: '1.2rem'
                    }}
                  >
                    magnustrojahn@gmail.com
                  </a>
                </div>
                <div style={socialMediaContainerStyle}>
                  <a 
                    href="https://github.com/magnustrojahn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <img 
                      src={githubImage} 
                      alt="GitHub" 
                      style={socialMediaImageStyle}
                    />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/magnus-hart%C3%B8-trojahn-20185a149/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <img 
                      src={linkedinImage} 
                      alt="LinkedIn" 
                      style={socialMediaImageStyle}
                    />
                  </a>
                </div>
                <Card.Text className="text-center mt-4">
                  Feel free to reach out for collaborations, questions, or just to say hello!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact; 