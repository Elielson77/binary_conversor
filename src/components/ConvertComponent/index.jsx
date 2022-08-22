import React, { useState } from "react";
import { KeyboardDoubleArrowRightOutlined } from '@mui/icons-material';
import './style.css'



const BinaryToDecimal = ({ label, convertFunction }) => {

  const [toConvert, setToConvert] = useState();
  const [result, setResult] = useState();


  return (
    <div className="input-container">
      <div className="input">
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {label}:
          <input type="number" onChange={e => setToConvert(e.target.value)} />
        </label>
        <KeyboardDoubleArrowRightOutlined sx={{ml: 2}}/>
        <div className="resultado">{result}</div>
      </div>
      <button onClick={() => setResult(convertFunction(toConvert))}>Converter</button>
    </div>

  )
}

export default BinaryToDecimal; 