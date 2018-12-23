import React from 'react';

import './UserInput.css';
import '../css/global.css';

const userInput = (props) => {
  return (
  <div className="UserInput card">
  <p>Username: {props.name}</p>
  <input type="text" onChange={props.nameChangeHandler} defaultValue={props.name}/>
  </div>
)}

export default userInput;
