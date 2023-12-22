import React from 'react';
import { Vortex } from 'react-loader-spinner';
import { ColorRing } from 'react-loader-spinner';


const AfterLoader = () => {
  // Determine the screen width
  const screenWidth = window.innerWidth;

  // Define styles based on screen width
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Default style for desktop
  };

  // Adjust styles for smaller screens (e.g., Android)
  if (screenWidth <= 767) {
    loaderStyle.height = '100%';
    loaderStyle.padding = '20px';
  }

  return (
    <div style={loaderStyle}>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

export default AfterLoader;
