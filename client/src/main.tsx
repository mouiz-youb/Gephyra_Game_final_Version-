import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
      <Toaster 
        position="bottom-center" 
        reverseOrder={false}
        toastOptions={{
          duration: 3000, 
          success: {
            duration: 2000,
            style: {
              background: "green",
              color: "white", // ✅ optional for readability
            },
          },
          error: {
            duration: 4000,
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
    </StrictMode>
  </BrowserRouter>
)
