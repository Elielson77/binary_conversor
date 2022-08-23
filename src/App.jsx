import ConvertComponent from './components/ConvertComponent'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useState } from 'react';

function App() {

  const [typeConverse, setTypeConverse] = useState('default');

  const binaryToDecimal = (binary) => {
    if (!binary) {
      toast.info("O campo não pode estar vazio!", { autoClose: 3000 })
      return
    }
    const arrayOfBinary = binary.toString().split('').reverse()
    let decimalNumber = 0;

    for (let i = 0; i < arrayOfBinary.length; i++) {
      const binaryDigit = Number(arrayOfBinary[i])
      if (binaryDigit !== 0 && binaryDigit !== 1) {
        toast.info("Insira apenas 0 e/ou 1!", { autoClose: 3000 })
        return
      }
      decimalNumber += binaryDigit * (2 ** i);
    }
    return (decimalNumber)
  }


  const decimalToBinary = (decimal) => {

    if (!decimal) {
      toast.info("O campo não pode estar vazio!", { autoClose: 3000 })
      return
    }

    let number = decimal;
    const numberBinary = [];

    while (number >= 1) {
      numberBinary.push(number % 2)
      number = Math.floor(number / 2);
    }

    return Number(numberBinary.reverse().join(''))
  }


  return (
    <div className="App">

      <ToastContainer />

      <h1>Conversor</h1>

      <FormControl sx={{ width: '200px'}}>
        <InputLabel id='type-conversion'>Tipo de Conversão</InputLabel>

        <Select label="Tipo de conversão" onChange={e => setTypeConverse(e.target.value)} labelId='type-conversion' value={typeConverse}>
          <MenuItem value="binary-to-decimal"> Binário / Decimal</MenuItem>
          <MenuItem value="decimal-to-binary"> Decimal / Binário</MenuItem>
        </Select>

      </FormControl>

      <ConvertComponent
        convertFunction={typeConverse === 'default' ?
          '' :
          typeConverse === 'binary-to-decimal' ?
            binaryToDecimal :
            typeConverse === 'decimal-to-binary' ?
              decimalToBinary :
              ''}
        label={'Digite aqui o número'}
      />
    </div>
  )
}

export default App
