import React from 'react';
import logo from './placeholder.png'; 
import "./Map.css"

console.log(logo); 

function Image() {
  // Import result is the URL of your image
  return <img src={logo} className="descriptionImage" alt="Logo" />;
}

export default Image;