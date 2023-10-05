import React, { useState } from 'react';
import './App.css';

function CalcButton({ label, onClick, buttonClassName = 'CalcButton' }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function CalcDisplay({ display }) {
  return (
    <div className='CalcDisplay'>
      {display}
    </div>
  );
}

function App() {
  const [disp, setDisp] = useState('0');
  const [num1, setNum1] = useState(null);
  const [oper, setOper] = useState(null);
  const [num2, setNum2] = useState(null);

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (oper === null) {
      if (num1 !== null) {
        setNum1(num1 + value);
        setDisp(num1 + value);
      } else {
        setNum1(value);
        setDisp(value);
      }
    } else {
      if (num2 !== null) {
        setNum2(num2 + value);
        setDisp(num2 + value);
      } else {
        setNum2(value);
        setDisp(value);
      }
    }
  }

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (num1 !== null && oper === null) {
      setOper(value);
      setDisp(value);
    }
  }

  const equalClickHandler = (e) => {
    e.preventDefault();

    if (num1 !== null && oper !== null && num2 !== null) {
      let result;

      switch (oper) {
        case '+':
          result = parseInt(num1) + parseInt(num2);
          break;
        case '-':
          result = parseInt(num1) - parseInt(num2);
          break;
        case '*':
          result = parseInt(num1) * parseInt(num2);
          break;
        case '÷':
          result = parseInt(num1) / parseInt(num2);
          break;
        default:
          result = 'ERROR';
      }

      setDisp(result);
      setNum1(result);
      setOper(null);
      setNum2(null);
    }
  }

  const clearClickHandler = (e) => {
    e.preventDefault();

    setDisp('0');
    setNum1(null);
    setOper(null);
    setNum2(null);
  }

  const handleMySurnameClick = () => {
    setDisp('Louies Angelo Mesia');
  };

  return (
    <div className='CalcContainer'>
      <h1 className="CalculatorTitle">Louies Angelo Mesia - IT3A</h1>
      <CalcDisplay display={disp} />
      <div className='ButtonContainer'>
        <CalcButton label={7} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
        <CalcButton label={8} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
        <CalcButton label={9} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
        <CalcButton label={"+"} onClick={operatorClickHandler} />
        <CalcButton label={4} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
        <CalcButton label={5} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
        <CalcButton label={6} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
        <CalcButton label={"-"} onClick={operatorClickHandler} />
        <CalcButton label={1} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
        <CalcButton label={2} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
        <CalcButton label={3} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
        <CalcButton label={"*"} onClick={operatorClickHandler} />
        <CalcButton label={"C"} onClick={clearClickHandler} buttonClassName={"CalcButtonClear"} />
        <CalcButton label={0} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
        <CalcButton label={"="} onClick={equalClickHandler} buttonClassName={"CalcButtonEqual"} />
        <CalcButton label={"÷"} onClick={operatorClickHandler} />
      </div>
      <div className='Surname'>
        <button className='CalcButton MySurnameButton' onClick={handleMySurnameClick}>
          MESIA
        </button>
      </div>
    </div>
  );
}

export default App;
