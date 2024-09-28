// PropTypes undefined issue, referemce: https://stackoverflow.com/a/52417058
import PropTypes from "prop-types";

export default function Numpad({ number, setNumber, storedValue }) {
  function handleNumber(e) {
    // Ignore clicks on div container
    if (e.target.getAttribute("class") === "numbers") {
      return;
    }

    // Get the digit from the button clicked
    let newDigit = e.target.textContent;

    // Handle Clear button press
    // TODO: Would be better to handle it with event handle click?
    if (newDigit == "Clear") {
      handleClear(e)
      return
    } else if (newDigit === "Recall") {
      setNumber(storedValue)
      return
    } else if (newDigit === ".") {
        if (number.includes('.')) {
            return
        }
        setNumber(number + newDigit)
        return
    }

    // Update number: Append digit to current number if not 0
    setNumber(number === "0" ? newDigit : number + newDigit);
  }

  function handleClear() {
    setNumber("0");
  }

  return (
    <>
      <div className="panel">
        <p>{number}</p>
        <div className="numbers" onClick={handleNumber}>
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
          <button>Recall</button>
          <button>.</button>
        </div>
      </div>
    </>
  );
}

Numpad.propTypes = {
  number: PropTypes.string,
  setNumber: PropTypes.func,
  storedValue: PropTypes.string,
};
