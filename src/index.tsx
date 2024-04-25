import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProviders';

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

