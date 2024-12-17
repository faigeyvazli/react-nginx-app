import './styles/reset.css';

import { useState } from 'react';

import { Button } from '@app/components/button';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>This is app</p>
      <Button onClick={() => setCount((prevState) => prevState + 1)}>Count: {count}</Button>
      <p>Version: {import.meta.env.VITE_APP_VERSION}</p>
    </div>
  );
};
