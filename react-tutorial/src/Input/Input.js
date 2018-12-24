import React from 'react';

import '../css/global.css';

const input = (props) => {
  return (
  <div className="card">
  <input type="text" onChange={props.inputHandler} />
  <p>Character Count: {props.inputHandler()}</p>
  </div>
)}

export default input;
