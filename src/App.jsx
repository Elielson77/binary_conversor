import BinaryToDecimal from './components/BinaryToDecimal'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  

  return (
    <div className="App">
      <ToastContainer />
      <h1>Conversor Binário para Decimal</h1>

      <BinaryToDecimal />
    </div>
  )
}

export default App
