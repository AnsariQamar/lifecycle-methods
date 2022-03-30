import React from 'react';
import './style.css';
import Counter from './component/Counter';
import Counter2 from './component/Counter2';
export default function App() {
  const [num, setNum] = React.useState(0);
  
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      {/* <Counter number={num} /> */}
      <Counter2 number={num} />
    </div>
  );
}
