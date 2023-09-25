import React from 'react';
import { Vortex } from 'react-loader-spinner';

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
      <Vortex
        visible={true}
        height="500"
        width="500"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};

export default AfterLoader;
