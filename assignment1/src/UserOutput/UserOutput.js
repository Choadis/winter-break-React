import React from 'react';

import '../css/global.css';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput card">
    <p>{props.text1}</p>
    <p>{props.text2}</p>
    </div>
  )}

  export default userOutput;
