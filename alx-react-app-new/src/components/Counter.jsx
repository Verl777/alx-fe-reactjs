import { useState } from 'react';

function Counter() {
  // Step 1: Initialize state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {/* Step 2: Display count */}
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>

      {/* Step 3: Buttons for actions */}
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '10px 15px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px 15px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px 15px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
