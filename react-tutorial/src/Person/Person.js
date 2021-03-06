import React from 'react';

import './Person.css';
import '../css/global.css';

const person = (props) => {
  return (
  <div className="Person card">
  <p onClick={props.click}>My name is {props.name} and I am {props.age} years old</p>
  <p>{props.children}</p>
  <input type="text" onChange={props.changed} defaultValue={props.name}/>
  </div>
)}

export default person;
