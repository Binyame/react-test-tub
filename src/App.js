import { useState, useRef, useEffect } from 'react'
import './App.css';

const App = () => {
  const [tubHeight, setTubHeight] = useState(0)
  const [direct, setDirect] = useState(0)
  
  useInterval(() => {
    // Your custom logic here
    const tmp = tubHeight + direct
    if(tmp >= 0 && tmp <= 100) setTubHeight(tmp);
  }, 2000);

  return (
    <div className="App">
      <div className="container">
        <div style={{width: '20%'}}>
          <div className="tub flex align-end">
            <div className="water" style={{height: `${tubHeight}px`}}>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <div>
              <button onClick={() => setDirect(20)} >
                increaseWaterLevel
              </button>
            </div>
            <div className="pl-4">
              <button onClick={() => setDirect(-20)}>
                reduceWaterLevel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default App;
