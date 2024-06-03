import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import r2wc from '@r2wc/react-to-web-component';
import App from './App.tsx';
import './index.scss';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

if (import.meta.env.VITE_ENV === 'test' || import.meta.env.VITE_ENV === 'prod') {
  const Nyhetssenter = r2wc(App);
  customElements.define('ilt-nyhetssenter-wrapper', Nyhetssenter);
} else {
  const rootElement = document.getElementById('root')!;
  if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <StrictMode>
        <RouterProvider router={router}/>
      </StrictMode>,
    );
  }
}
