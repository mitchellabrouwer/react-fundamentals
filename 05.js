// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from "react";
import "../box-styles.css";

// Extra 2
// styling part of the component implementation

function Box({ size, className = "", style, ...otherProps }) {
  const sizeClassName = size ? `box--${size}` : "";
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{ fontStyle: "italic", ...style }}
      {...otherProps}
    ></div>
  );
}

function App() {
  return (
    <div>
      <Box size="small" style={{ backgroundColor: "lightblue" }}>
        small lightblue box
      </Box>
      <Box size="medium" style={{ backgroundColor: "pink" }}>
        medium pink box
      </Box>
      <Box size="large" style={{ backgroundColor: "orange" }}>
        large orange box
      </Box>
    </div>
  );
}

export default App;

// Exercise

// const smallBox = (
//   <div
//     className="box box--small"
//     style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{fontStyle: 'italic', backgroundColor: 'pink'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{fontStyle: 'italic', backgroundColor: 'orange'}}
//   >
//     large orange box
//   </div>
// )
