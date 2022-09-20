import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ButtonCount from './components/ButtonCount'
import './App.css'
import Calculator from './components/Calculator'
import SimplePropComponent from './components/SimplePropComponent'
import A from './components/A'

function App() {
  //  const [num, setNum] = useState(0)

  return (
    <div className="App">

      <ButtonCount />
      <Calculator />
      <br />
      <SimplePropComponent person={{ name: "Aleks", age: 26 }} />
      <A num={num} setNum={setNum} />
    </div>
  )
}

export default App
