import React, { useState } from "react";
import './style.css'
import { toast } from "react-toastify";


const BinaryToDecimal = () => {

  const [binaryNumber, setBinaryNumber] = useState();
  const [decimalNumber, setDecimalNumber] = useState();

  const binaryToDecimal = (binary) => {

    if (!binary) {
      toast("O campo não pode estar vazio!", { autoClose: 3000, icon: false })
      setDecimalNumber()
      return
    }

    const arrayOfBinary = binary.toString().split('').reverse()
    let decimalNumber = 0;

    for (let i = 0; i < arrayOfBinary.length; i++) {
      const binaryDigit = Number(arrayOfBinary[i])
      if (binaryDigit !== 0 && binaryDigit !== 1) {
        setDecimalNumber()
        toast("Insira apenas 0 ou 1!", { autoClose: 3000, icon: false })
        return
      }
      decimalNumber += binaryDigit * (2 ** i);
    }
    setDecimalNumber(decimalNumber);
    return
  }


  return (
    <div className="input-container">
      <div className="input">
        <label style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          Digite aqui o número binário:
          <input type="number" onChange={e => setBinaryNumber(e.target.value)} />
        </label>
        <div className="resultado">{decimalNumber}</div>
      </div>
      <button onClick={() => binaryToDecimal(binaryNumber)}>Converter</button>
    </div>

  )
}

export default BinaryToDecimal; 