import React from 'react';

export default function ExampleCarouselImage({ src, alt }) {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
      style={{ height: '300px', objectFit: 'cover' }}
    />
  );
} 