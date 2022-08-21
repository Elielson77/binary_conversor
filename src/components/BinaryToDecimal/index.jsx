import React, { useState } from "react";

const BinaryToDecimal = () => {

  const [binaryNumber, setBinaryNumber] = useState();
  const [decimalNumber, setDecimalNumber] = useState();

  const binaryToDecimal = (binary) => {
    const arrayOfBinary = binary.toString().split('').reverse()
    let decimalNumber = 0;

    for (let i = 0; i < arrayOfBinary.length; i++) {
      const binaryDigit = Number(arrayOfBinary[i])
      if (binaryDigit !== 0 && binaryDigit !== 1) {
        console.log(binaryDigit)
        return "Insira apenas 0 ou 1!"
      }
      decimalNumber += binaryDigit * (2 ** i);
    }
    setDecimalNumber(decimalNumber);
  }


  return (
    <>
      <div className="input-container">
        <label>
          Digite aqui o número binário:
          <input type="number" onChange={e => setBinaryNumber(e.target.value)}/>
        </label>
        <div className="resultado">{decimalNumber}</div>
      </div>
      <button onClick={() => binaryToDecimal(binaryNumber)}>Converter</button>
    </>

  )
}

export default BinaryToDecimal; 