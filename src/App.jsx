import { useState } from "react";
import "./App.css";
import Numpad from "./components/Numpad";

function App() {
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("0");
  const [operator, setOperator] = useState("+");
  const [sum, setSum] = useState(0);
  const [storedValue, setStoredValue] = useState("0");

  function handleOperator(e) {
    // Ignore clicks on div container
    if (e.target.getAttribute("class") === "numbers") {
      return;
    }
    setOperator(e.target.textContent);
  }

  function handleCalculation() {
    const first = parseFloat(firstNumber);
    const second = parseFloat(secondNumber);

    let result = 0.0;

    switch (operator) {
      case "+":
        result = first + second;
        break;

      case "-":
        result = first - second;
        break;

      case "*":
        result = first * second;
        break;

      case "÷":
        result = first / second;
        break;

      default:
        result = -1.0;
        break;
    }

    // setSum(result.toFixed(4))
    setSum(result);
  }

  function handleStoreValue() {
    setStoredValue(sum.toString());
  }

  return (
    <div className="calculator">
      <Numpad
        number={firstNumber}
        setNumber={setFirstNumber}
        storedValue={storedValue}
      />

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers" onClick={handleOperator}>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <Numpad
        number={secondNumber}
        setNumber={setSecondNumber}
        storedValue={storedValue}
      />

      <div className="panel answer">
        <p>{sum}</p>
        <div>
          <button onClick={handleStoreValue}>Store Answer</button>
          <button onClick={handleCalculation}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
