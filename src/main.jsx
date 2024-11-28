import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // React 18 correct import
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sections from './Sections.jsx';
import FullMenu from './components/pages/FullMenu.jsx';
import Blogs from './components/pages/Blogs.jsx';

// Define the router correctly
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', // Use "/" for the default route
        element: <Sections />
      },
      {
        path: '/fullmenu',
        element: <FullMenu />
      },
      {
        path: '/blogs',
        element: <Blogs />
      }
    ]
  }
]);

// Mount the app using createRoot
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
