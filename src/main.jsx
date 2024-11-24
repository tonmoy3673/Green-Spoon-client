import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Components/Route/router'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router}/>
   </div>
  </StrictMode>,
)
