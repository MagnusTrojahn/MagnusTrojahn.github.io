import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import pollenImage from '../assets/pollencollector2.jpg';
import pollenImage2 from '../assets/pollen collector 3.jpg';
import pollenImage3 from '../assets/Pollen-collector.jpg';
import welcomeImage from '../assets/1743886710551.png';
import githubImage from '../assets/githubimg.png';
import linkedinImage from '../assets/linkedinimg.png';
import soefartImage from '../assets/søfart.png';

export function Projects() {
  // Main grid container styles
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    fontFamily: "'Montserrat', sans-serif"
  };

  // Box styles
  const boxStyle = {
    backgroundColor: '#F5F5DC',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    fontFamily: "'Montserrat', sans-serif"
  };

  // Profile box styles
  const profileBoxStyle = {
    backgroundColor: '#F5F5DC',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    fontFamily: "'Montserrat', sans-serif",
    gridColumn: 'span 1'
  };

  // Large box styles (spans 2 columns)
  const largeBoxStyle = {
    ...boxStyle,
    minHeight: '400px',
    gridColumn: 'span 2',
    position: 'relative',
    overflow: 'hidden'
  };

  // Background image styles
  const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${welcomeImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 1,
    zIndex: 1
  };

  // Content overlay styles
  const contentOverlayStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '20px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
    color: 'white',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };

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

  // Email link styles
  const emailLinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    fontStyle: 'italic'
  };

  // Projects header style
  const projectsStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    minHeight: '100px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    gridColumn: 'span 3',
    backgroundColor: '#FFFDF0',
    textAlign: 'center',
    fontFamily: "'Montserrat', sans-serif"
  };

  // Header title style
  const headerTitleStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '20px',
    textAlign: 'center',
    width: '100%',
    fontFamily: "'Montserrat', sans-serif"
  };

  // Add a new style for the card wrapper
  const cardWrapperStyle = {
    flex: '1',
    minWidth: '0' // This prevents flex items from overflowing
  };

  return (
    <div style={gridContainerStyle}>
      {/* Large Hero Box */}
      <div style={largeBoxStyle}>
        <div style={backgroundImageStyle} />
        <div style={contentOverlayStyle}>
          <h1 style={{ 
            color: 'white', 
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)', 
            fontFamily: "'Montserrat', sans-serif",
            margin: 0,
            fontSize: '1.5rem',
            maxWidth: '800px'
          }}>
            For me, it's all about making things work better and smarter using AI.
          </h1>
        </div>
      </div>
      {/* Profile Box */}
      <div style={profileBoxStyle}>
        <h1 style={{textAlign: 'center', fontFamily: "'Montserrat', sans-serif"}}>Magnus Hartø Trojahn</h1>
        <a 
          href="mailto:magnustrojahn@gmail.com"
          style={{...emailLinkStyle, textAlign: 'center', display: 'block', fontFamily: "'Montserrat', sans-serif"}}
        >
          magnustrojahn@gmail.com
        </a>
        <div style={{...socialMediaContainerStyle, justifyContent: 'center'}}>
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
        <p style={{textAlign: 'center', fontFamily: "'Montserrat', sans-serif"}}>Pursuing Cand.scient. degree in computer science at Roskilde University</p>
        <p style={{textAlign: 'center', fontFamily: "'Montserrat', sans-serif"}}>Vice chair of computer science and digital transformation study board</p>
      </div>

      {/* Projects Container */}
      <div style={projectsStyle}>
        <h2 style={headerTitleStyle}>Projects & Experience</h2>
        
        {/* First Card Group */}
        <CardGroup className="mb-4" style={{ display: 'flex', gap: '20px' }}>
          <a 
            href="/seafacts" 
            style={{ ...cardWrapperStyle, textDecoration: 'none', color: 'inherit' }}
          >
            <Card style={{ backgroundColor: '#FFFDF0', fontFamily: "'Montserrat', sans-serif", cursor: 'pointer', height: '100%' }}>
              <Card.Img variant="top" src={soefartImage} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{fontFamily: "'Montserrat', sans-serif"}}>SEAFACTS Research Project</Card.Title>
                <Card.Text style={{fontFamily: "'Montserrat', sans-serif"}}>
                Turning messy historical text into a digital platform for maritime history.

                <div style={{fontStyle: 'italic', fontSize: '0.9em', fontWeight: 'bold'}}>Python, PostgreSQL, OCR, rule-based NLP</div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <span style={{ color: '#2c3e50', fontFamily: "'Montserrat', sans-serif" }}>
                  Learn more →
                </span>
              </Card.Footer>
            </Card>
          </a>

          <div style={cardWrapperStyle}>
            <Card style={{ backgroundColor: '#FFFDF0', fontFamily: "'Montserrat', sans-serif", height: '100%' }}>
              <Card.Body>
                <Card.Title style={{fontFamily: "'Montserrat', sans-serif"}}>Study Board Position</Card.Title>
                <Card.Text style={{fontFamily: "'Montserrat', sans-serif"}}>
                  Vice chair of computer science and digital transformation study board
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted" style={{fontFamily: "'Montserrat', sans-serif"}}>Current Position</small>
              </Card.Footer>
            </Card>
          </div>

          <div style={cardWrapperStyle}>
            <Card style={{ backgroundColor: '#FFFDF0', fontFamily: "'Montserrat', sans-serif", height: '100%' }}>
              <Card.Body>
                <Card.Title style={{fontFamily: "'Montserrat', sans-serif"}}>Education</Card.Title>
                <Card.Text style={{fontFamily: "'Montserrat', sans-serif"}}>
                  Pursuing Cand.scient. degree in computer science at Roskilde University
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted" style={{fontFamily: "'Montserrat', sans-serif"}}>Expected Graduation: 2025</small>
              </Card.Footer>
            </Card>
          </div>
        </CardGroup>
        
        {/* Second Card Group */}
        <CardGroup style={{ display: 'flex', gap: '20px' }}>
          <div style={cardWrapperStyle}>
            <Card style={{ backgroundColor: '#FFFDF0', fontFamily: "'Montserrat', sans-serif", height: '100%' }}>
              <Card.Body>
                <Card.Title style={{fontFamily: "'Montserrat', sans-serif"}}>Project Pollen</Card.Title>
                <Card.Img variant="top" src={pollenImage} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Text style={{fontFamily: "'Montserrat', sans-serif"}}>
                  Building a pollen collector and object detection model to detect pollen in microscopic images
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a 
                  href="/project-pollen" 
                  style={{ color: '#2c3e50', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif" }}
                >
                  Learn more →
                </a>
              </Card.Footer>
            </Card>
          </div>

          <div style={cardWrapperStyle}>
            <Card style={{ backgroundColor: '#FFFDF0', fontFamily: "'Montserrat', sans-serif", height: '100%' }}>
              <Card.Body>
                <Card.Title style={{fontFamily: "'Montserrat', sans-serif"}}>Services</Card.Title>
                <Card.Text style={{fontFamily: "'Montserrat', sans-serif"}}>
                  AI consulting and development services
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a 
                  href="#services" 
                  style={{ color: '#2c3e50', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif" }}
                >
                  Learn more →
                </a>
              </Card.Footer>
            </Card>
          </div>
        </CardGroup>
      </div>
    </div>
  );
}

export default Projects; 