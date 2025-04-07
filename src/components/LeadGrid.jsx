import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from '../assets/1743886710551.png';
import githubImage from '../assets/githubimg.png';
import linkedinImage from '../assets/linkedinimg.png';
import { Button, Group } from '@mantine/core';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export function LeadGrid({ 
  minColumnWidth = 300, 
  minItemHeight = 200,
  maxWidth = 1200,
  gap = 20,
  padding = 20
}) {
  // Main grid container styles
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gap: `${gap}px`,
    padding: `${padding}px`,
    maxWidth: `${maxWidth}px`,
    margin: '0 auto',
    width: '100%',
    fontFamily: "'Cambria', serif"
  };

  // Common box styles
  const boxStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    minHeight: `${minItemHeight}px`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };
  const whoStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    minHeight: `${minItemHeight/2}px`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gridColumn: 'span 3'
  };

  // Large box styles (spans 2 columns)
  const largeBoxStyle = {
    ...boxStyle,
    minHeight: `${minItemHeight * 2}px`,
    gridColumn: 'span 3',
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
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
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

  const projectsStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    minHeight: `${minItemHeight/2}px`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gridColumn: 'span 3',
    backgroundColor: '#f8f9fa',
    textAlign: 'center'
  };

  const cardStyle = {
    ...boxStyle,
    backgroundColor: '#ffffff',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    }
  };

  return (
    <div style={gridContainerStyle}>
      {/* Large Hero Box */}
      <div style={largeBoxStyle}>
        <div style={backgroundImageStyle} />
        <div style={contentOverlayStyle}>
          <h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}></h1>
        </div>
      </div>

      {/* Profile Box */}
      <div style={boxStyle}>
        <h1>Magnus Hartø Trojahn</h1>
        <a 
          href="mailto:magnustrojahn@gmail.com"
          style={emailLinkStyle}
        >
          magnustrojahn@gmail.com
        </a>
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
        <p>For me, it's all about making things work better and smarter using AI.</p>
        <p>Vice chair of computer science and digital transformation study board</p>
      </div>

      {/* Projects Header */}
      <div style={projectsStyle}>
        <h2 style={{ margin: 0, color: '#2c3e50' }}>Projects & Experience</h2>
        <div style={{ marginTop: '20px' }}>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>SEAFACTS Research Project</Card.Title>
                <Card.Text>
                  Working as a student assistant on a digital platform for maritime history
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a 
                  href="https://forskning.ruc.dk/en/projects/projekt-seafacts-en-digital-platform-til-s%C3%B8fartshistorien" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#2c3e50', textDecoration: 'none' }}
                >
                  Learn more →
                </a>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Study Board Position</Card.Title>
                <Card.Text>
                  Vice chair of computer science and digital transformation study board
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Current Position</small>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Education</Card.Title>
                <Card.Text>
                  Pursuing Cand.scient. degree in computer science at Roskilde University
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Expected Graduation: 2025</small>
              </Card.Footer>
            </Card>
          </CardGroup>

          <CardGroup style={{ marginTop: '20px' }}>
            <Card>
              <Card.Body>
                <Card.Title>Project Pollen</Card.Title>
                <Card.Img variant="top" src={require('../assets/pollencollector2.jpg')} />
                <Card.Text>
                  Building a pollen collector and object detection model to detect pollen in microscopic images
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a 
                  href="/project-pollen" 
                  style={{ color: '#2c3e50', textDecoration: 'none' }}
                >
                  Learn more →
                </a>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Services</Card.Title>
                <Card.Text>
                  AI consulting and development services
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a 
                  href="#services" 
                  style={{ color: '#2c3e50', textDecoration: 'none' }}
                >
                  Learn more →
                </a>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
}

export default LeadGrid;