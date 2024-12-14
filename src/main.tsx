import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app.tsx';

const rootElement = document.getElementById('root')!;

const rootNode = (
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(rootElement).render(rootNode);
