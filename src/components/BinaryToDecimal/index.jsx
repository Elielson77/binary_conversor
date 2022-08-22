import React, { useState } from "react";
import './style.css'



const BinaryToDecimal = ({label, binaryToDecimal}) => {

  const [toConvert, setToConvert] = useState();
  const [result, setResult] = useState();


  return (
    <div className="input-container">
      <div className="input">
        <label style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          {label}:
          <input type="number" onChange={e => setToConvert(e.target.value)} />
        </label>
        <div className="resultado">{result}</div>
      </div>
      <button onClick={() => setResult(binaryToDecimal(toConvert))}>Converter</button>
    </div>

  )
}

export default BinaryToDecimal; 