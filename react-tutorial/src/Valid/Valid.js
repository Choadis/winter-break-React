import React from 'react';

import '../css/global.css';

const valid = (props) => {
  return (
  <div className="card">
  <p>Validation status: {props.valid}</p>
  </div>
)}

export default valid;
