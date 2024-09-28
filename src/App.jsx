import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState("+");
  const [sum, setSum] = useState(0);

  function handleNumber(e) {
    // Ignore clicks on div container
    if (e.target.getAttribute("class") === "numbers") {
      return;
    }

    // Reset number on Clear
    const number = e.target.textContent === "Clear" ? 0 : e.target.textContent;

    // Check if first or second number should be updated
    const parentClass = e.currentTarget.getAttribute("id");
    parentClass === "first-number"
      ? setFirstNumber(number)
      : setSecondNumber(number);

    if (parentClass === "first-number") {
      setFirstNumber(number);
    } else if (parentClass === "second-number") {
      setSecondNumber(number);
    }
  }

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
        break;

      case "-":
        setSum(first - second);
        break;

      case "*":
        setSum(first * second);
        break;

      case "÷":
        setSum(first / second);
        break;

      default:
        setSum(-1);
        break;
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers" id="first-number" onClick={handleNumber}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers" onClick={handleOperator}>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers" id="second-number" onClick={handleNumber}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{sum}</p>
        <div>
          <button onClick={handleCalculation}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
