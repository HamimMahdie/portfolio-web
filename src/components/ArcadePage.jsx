import React from 'react';
import MainComponent from './MainComponent'; // Assuming MainComponent is your arcade game component
import Navbar from './Navbar';

const ArcadePage = () => {
  return (
    <>
      <Navbar />
      <div className="arcade-container">
        <MainComponent />
      </div>
    </>
  );
};

export default ArcadePage;
