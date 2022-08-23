import React, { useState } from "react";
import { KeyboardDoubleArrowRightOutlined } from '@mui/icons-material';
import './style.css'
import { toast } from "react-toastify";



const BinaryToDecimal = ({ label, convertFunction }) => {

  const [toConvert, setToConvert] = useState();
  const [result, setResult] = useState();

  const executeConversion = () => {
    if(!convertFunction){
      toast.info("Escolha um modo de conversão!")
      return
    }  

    setResult(convertFunction(toConvert))
  }

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
      <button onClick={() => executeConversion()}>Converter</button>
    </div>

  )
}

export default BinaryToDecimal; 