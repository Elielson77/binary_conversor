import BinaryToDecimal from './components/BinaryToDecimal'
import './App.css'
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const binaryToDecimal = (binary) => {
    if (!binary) {
      toast.info("O campo não pode estar vazio!", { autoClose: 3000, icon: false })
      return
    }
    const arrayOfBinary = binary.toString().split('').reverse()
    let decimalNumber = 0;

    for (let i = 0; i < arrayOfBinary.length; i++) {
      const binaryDigit = Number(arrayOfBinary[i])
      if (binaryDigit !== 0 && binaryDigit !== 1) {
        toast.info("Insira apenas 0 e/ou 1!", { autoClose: 3000, icon: false })
        return
      }
      decimalNumber += binaryDigit * (2 ** i);
    }
    return(decimalNumber)
  }


  return (
    <div className="App">
      <ToastContainer />
      <h1>Conversor Binário para Decimal</h1>

      <BinaryToDecimal
        label="Digite aqui o número binário"
        binaryToDecimal={binaryToDecimal}
      />
    </div>
  )
}

export default App
