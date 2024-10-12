import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import ImpressumPage from './pages/ImpressumPage';
import VanVenturaPage from './pages/VanVenturaPage.jsx';
import FellundFlauschigPage from './pages/FellundFlauschigPage.jsx';
import PiazzaPage from './pages/PiazzaPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/impressum',
    element: <ImpressumPage />,
  },
  {
    path: '/vanventura',
    element: <VanVenturaPage />,
  },
  {
    path: '/fellundflauschig',
    element: <FellundFlauschigPage />,
  },
  {
    path: '/piazza',
    element: <PiazzaPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
