import SimplePropComponent from './components/SimplePropComponent'
import ButtonCount from './components/ButtonCount'
import Calculator from './components/Calculator'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import A from './components/A'
import Prime from './components/Prime'
import './App.css'

function App() {
  //  const [num, setNum] = useState(0)

  // Lös övningen för Primtal om du kan: <Prime />
  return (
    <div className="App">

      <ButtonCount />
      <Calculator />
      <br />
      <SimplePropComponent person={{ name: "Aleks", age: 26 }} />
      <A />
    </div>
  )
}

export default App
