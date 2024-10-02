import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.jsx';
import { AuthModalProvider } from './contexts/AuthModalContext.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthModalProvider>
      <RouterProvider router={router} />
    </AuthModalProvider>
  </StrictMode>
);
