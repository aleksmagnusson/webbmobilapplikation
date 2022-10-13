import { useEffect, useReducer, useRef } from 'react'
import './App.css'

const initialState = {
  time: 0,
  running: false
}



function App() {
  const [state, dispatch] = useReducer(clockReducer, initialState);
  const intervalRef = useRef();

  useEffect


  return (
    <div className="App">
      <p>{state.time}sekunder</p>

    </div>
  )
}

export default App
