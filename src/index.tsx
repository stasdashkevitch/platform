import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProviders';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoudary';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);

