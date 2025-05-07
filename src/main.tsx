import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { Provider } from 'react-redux'
// import { store } from './redux/store.ts'
import { BrowserRouter } from 'react-router'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { productsApi } from './redux/product-api.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
      <ApiProvider api={productsApi}>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>

      </ApiProvider>
     
  
  
    
   
  </StrictMode>,
)
