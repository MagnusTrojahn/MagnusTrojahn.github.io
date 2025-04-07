import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Header from './Header';

export function Seafacts() {
  return (
    <>
      
      <Container>
        <Card style={{ backgroundColor: '#F5F5DC', marginTop: '20px', fontFamily: "'Montserrat', sans-serif" }}>
          <Card.Body>
            <Card.Title style={{fontFamily: "'Montserrat', sans-serif"}}>SEAFACTS Research Project</Card.Title>
            <Card.Text style={{fontFamily: "'Montserrat', sans-serif"}}>
              I work with OCR-scanned historical documents, using Python to clean, extract, and structure the data. It's stored in a PostgreSQL database and later visualized on the project website—my focus has been on writing rule-based scripts, doing text analysis, and preparing the data for future machine learning use.
            </Card.Text>
            <a 
              href="https://forskning.ruc.dk/en/projects/projekt-seafacts-en-digital-platform-til-s%C3%B8fartshistorien" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2c3e50', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif" }}
            >
              Visit Project Website →
            </a>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Seafacts; 