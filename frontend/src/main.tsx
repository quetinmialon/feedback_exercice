import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { OverlayProvider } from '@contexts/OverlayContext';
import { AuthProvider } from '@contexts/AuthContext';

import App from './App'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
  <OverlayProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </OverlayProvider>
  </AuthProvider>

)