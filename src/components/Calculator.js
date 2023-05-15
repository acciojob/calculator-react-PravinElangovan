
import React ,{useState} from 'react';
import './Calculator.css'

const Calculator = () => {

    const [result, setResult] = useState('');
    const handleClick = (value) => {
        setResult(result + value);
      };

      const calculateResult = () => {
        try {
          setResult(eval(result));
        } catch (error) {
          setResult('Error');
        }
      };

      const clearResult = () => {
        setResult('');
      };
  return (
    <div className='calculator'>
    <h1>Calculator</h1>
    <input type="text" name="" id="input" value={result} readOnly />
    <div className='btns'>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={clearResult}>Clear</button>
    

    </div>
    </div>
  )
}

export default Calculator;