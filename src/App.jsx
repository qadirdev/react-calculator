import { useState } from "react";

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-",'.'];

  const update = (e)=>{
    if (ops.includes(e) && calc === '' ||
    ops.includes(e) && ops.includes(calc.slice(-1)))
    {
      result;
    }

    setCalc(calc + e)
    
    if(!ops.includes(e)){
      setResult(eval(calc + e)).toString()
    }

  }
  const calculate=()=>{
    setCalc(eval(calc)).toString()
  }
  const deleteLast=()=>{
    if(calc == ''){
      return;
    }
    const e= calc.slice(0,-1)
    setCalc(e)

  }
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button onClick={()=>update(i.toString())} key={i}>{i}</button>);
    }
    return digits;
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result?<span>({result})</span>: ''} {calc || 0}
        </div>
        <div className="operators">
          <button onClick={()=>update('/')}>/</button>
          <button onClick={()=>update('*')}>*</button>
          <button onClick={()=>update('+')}>+</button>
          <button onClick={()=>update('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={()=>update('0')}>0</button>
          <button onClick={()=>update('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
