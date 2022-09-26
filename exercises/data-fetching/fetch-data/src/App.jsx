import React, { useState } from 'react'
import { useEffect } from 'react';

import './App.css'

function App() {
  const [qoutes, setQoutes] = useState([]);

  useEffect(() => {
    getDataButWithAxios();
  }, [])

  // not in use
  const postData = () => {
    axios.post("http://localhost:3000/qoutes", {
      author: "Aleks",
      qoute: "Better to throw up than under the bus.",
    })
  }
  return (
    <div className="App">

    </div>
  )
}

export default App
