import React from 'react'
import './Resultoperation.css'

interface Iprops {
  operation: string;
  result: string;
}
const Resultoperation = (props:Iprops) => {
  const symbol = props.result[0];
  const number = props.result.slice(1);
  return (
    <div className="result">
      <p>{props.operation}</p>
      <p>{symbol}</p>
      <p>{number}</p>
    </div>
  )
}

export default Resultoperation