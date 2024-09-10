import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10);
  const [error, setError] = useState(''); // State to hold error messages
  const [bgColor, setBgColor] = useState(''); // State to hold background color

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      setError(''); // Clear error message
      setBgColor(''); // Reset background color
    } else {
      setError('Cannot add value above 20.');
      setBgColor('red'); // Set background color to red on error
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setError(''); // Clear error message
      setBgColor(''); // Reset background color
    } else {
      setError('Cannot remove value below 0.');
      setBgColor('red'); // Set background color to red on error
    }
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px' }}>
      <h1>React Hooks</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      {error && <p style={{ color: 'white' }}>{error}</p>}
      <p>footer: {counter}</p>
    </div>
  );
}

export default App;
