import "./App.css"
import { useState } from "react"

function App() {
  const [numberOne, SetNumberOne] = useState(""); 
  const [op, SetOp] = useState("+");
  const [numberTwo, SetNumberTwo] = useState(""); 
  const [result, SetResult] = useState(""); 
  const [storeValue, SetStore] = useState(""); 

  const FirstNumberClick = (num) => {
    if(num === '0' && numberOne === '') {
      return
    }
    if(num === '.' && numberOne.includes('.')) {
      return;
    }
    if(num === '.' && numberOne === '') {
      num = '0.'
      SetNumberOne(num)
      return;
    }
    SetNumberOne((previous) => previous + num)
  }

  const SecondNumberClick = (num) => {
    if(num === '0' && numberTwo === '') {
      return
    }
    if(num === '.' && numberTwo.includes('.')) {
      return;
    }
    if(num === '.' && numberTwo === '') {
      num = '0.'
      SetNumberTwo(num)
      return;
    }
    SetNumberTwo((previous) => previous + num)
  }

  const Recall = (panel) => {
    if(panel === 1) {
      SetNumberOne(storeValue.toString())
    } else {
      SetNumberTwo(storeValue.toString())
    }
  }

  const OpClick = (operation) => {
    SetOp(operation); 
  }

  const ResetCalculator = (panel) => {
    if(panel === 1) {
      SetNumberOne("")
    } else if(panel === 2) {
      SetNumberTwo("")
    } else if(panel === 3) {
      SetResult("")
    }
    //SetOp("")
  }

  const StoreValue = () => {
    if(result === '') {
      return;
    }
    SetStore(result)
  }

  const Calculate = () => {
    let res = 0
    let n1 = numberOne
    let n2 = numberTwo
    if(numberOne === '') {
      n1 = '0'
    }
    if(numberTwo === '') {
      n2 = '0'
    }
    if(op === '+') {
      res = parseFloat(n1) + parseFloat(n2)
    } else if(op === '-') {
      res = parseFloat(n1) - parseFloat(n2)
    } else if(op === '*') {
      res = parseFloat(n1) * parseFloat(n2)
    } else if(op === '÷') {
      res = parseFloat(n1) / parseFloat(n2)
    }
    SetResult(res)
    
  }
 
  return (
    <div className="calculator">
      
      <div className="panel">
        <p>{numberOne || 0}</p>
        <div className="numbers">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].map((num) => (
            <button key={num} onClick={() => FirstNumberClick(num)}>{num}</button>
          ))}
          <button onClick={() => ResetCalculator(1)}>Clear</button>
          <button onClick={() => Recall(1)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{op || '+'}</p>
        <div className="numbers">
          {['+', '-', '*', '÷'].map((operation) => (
            <button key={operation} onClick={() => OpClick(operation)}>{operation}</button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{numberTwo || 0}</p>
        <div className="numbers">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].map((num) => (
            <button key={num} onClick={() => SecondNumberClick(num)}>{num}</button>
          ))}
          <button onClick={() => ResetCalculator(2)}>Clear</button>
          <button onClick={() => Recall(2)}>Recall</button>
        </div>
      </div>

      
      <div className="panel answer">
          <p>{result || 0}</p>
          <button onClick={() => Calculate()}>=</button>
          <button onClick={() => ResetCalculator(3)}>Clear</button>
          <button onClick={() => StoreValue()}>Store</button>
      </div>

      
    </div>
  )
}

export default App
