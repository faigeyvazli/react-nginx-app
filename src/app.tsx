import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>This is app</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>Count: {count}</button>
    </div>
  );
};
