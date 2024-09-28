import { useState } from "react";
import "./App.css";
import Numpad from "./components/Numpad";

function App() {
  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('0');
  const [operator, setOperator] = useState("+");
  const [sum, setSum] = useState(0);

  function handleOperator(e) {
    // Ignore clicks on div container
    if (e.target.getAttribute("class") === "numbers") {
      return;
    }
    setOperator(e.target.textContent);
  }

  function handleCalculation() {
    const first = parseInt(firstNumber);
    const second = parseInt(secondNumber);

    switch (operator) {
      case "+":
        setSum(first + second);
        break

      case "-":
        setSum(first - second);
        break

      case "*":
        setSum(first * second);
        break

      case "÷":
        setSum(first / second);
        break

      default:
        setSum(-1);
        break
    }
  }

  return (
    <div className="calculator">

      <Numpad number={firstNumber} setNumber={setFirstNumber}/>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers" onClick={handleOperator}>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <Numpad number={secondNumber} setNumber={setSecondNumber}/>
  
      <div className="panel answer">
        <p>{sum}</p>
        <div>
          <button onClick={handleCalculation}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App;
