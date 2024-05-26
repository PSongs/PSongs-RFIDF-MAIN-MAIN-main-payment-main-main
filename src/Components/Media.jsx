// Media.js

import React from 'react';

const Media = ({ src, alt, type, title, width, height, controls, className }) => {
  if (type === 'image') {
    return <img src={src} alt={alt} />;
  } else if (type === 'video') {
    return (
      <video controls={controls}  className={className}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  } else if (type === 'iframe') {
    return (
      <iframe
        src={src}
        title={title || alt}
        width={width || '100%'}
        height={height || '100%'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
      />
    );
  } else {
    return null; // Handle other types of media or invalid types gracefully
  }
};

export default Media;
