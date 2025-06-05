import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { App } from './App'
import { Body } from './view/body/Body'
import { BrowserRouter } from 'react-router-dom'
import { NavigationPage } from './components/NavigationPage'
import { NavBar } from './components/NavBar'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
      <NavigationPage/>
      <App/>
      
      <Body/>
    </BrowserRouter>
  </StrictMode>,
)
