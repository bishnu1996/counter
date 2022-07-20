import {useState} from 'react';
import './App.css';





function App() {

  const [value,setValue] = useState(0);

  const onIncreaseHandler = ()=>{
    setValue(value + 1);
  }
  const onDecreaseHandler = ()=>{
    if(value > 0)
    setValue(value - 1);
  }
  const onResetHandler = ()=>{
    setValue(0);
  }
  return (
    <div className = "container">
      <p className="paragraph">{value}</p>
      <button className="increase" onClick={onIncreaseHandler} >Increase</button>
      <button className="increase" onClick={onDecreaseHandler}>Decrease</button>
      <button className="increase" onClick={onResetHandler}>Reaset</button>

    </div>
  );
}

export default App;
