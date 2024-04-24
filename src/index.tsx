import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom';

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

