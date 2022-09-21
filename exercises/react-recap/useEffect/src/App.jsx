import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState({
    left: 0,
    right: 0,
  })
  const [history, setHistory] = useState([])

  function handleLeftClick() {
    const newCounter = {
      left: counter.left + 1,
      right: counter.right
    }
    setCounter(newCounter)
  }

  function handleRightClick() {
    const newCounter = {
      left: counter.left,
      right: counter.right + 1
    }
    setCounter(newCounter)
  }

  function handleClick(e) {
    const { name } = e.target

    if (name === "left") {
      setCounter({
        left: counter.left + 1,
        right: counter.right
      })
      if (name === "right") {
        setCounter({
          left: counter.left,
          right: counter.right + 1
        })
        setHistory(history.concat("R"));
      }

      //  setCounter((prevState) => ({ ...prevState, [name]: prevState[name] + 1 }));
    }

    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);


    /**   const isLoggedIn = true;
    
    if (isLoggedIn) {
      return <WelcomePage />
    }
    return <LogedInPage />
*/

    return (
      <div className="App">
        {history.pop() === "R" ? (
          <button name="left" onClick={handleLeftClick}>L{counter.left}</button>
        ) : (
          <button name="right" onClick={handleRightClick}>R{counter.right}</button>
        )}

        {isLoggedIn ? <History /> : null}
        {isLoggedIn && <History />}

        {history.length > 3 && (<p>
          {history.map((item, index) => {
            return <span key={index}>{index}</span>
          })}
        </p>
        )}
      </div>
    )
  }
}
export default App
