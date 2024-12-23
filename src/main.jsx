import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductsTable from './ProductsTable'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ProductsTable></ProductsTable>
  </StrictMode>,
)
