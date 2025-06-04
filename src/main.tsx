import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { App } from './App'
import { Image } from './components/Image'
import { Body } from './view/body/Body'
import { BrowserRouter } from 'react-router-dom'
import { NavigationPage } from './components/NavigationPage'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavigationPage/>
      <App/>
      <Image/>
      <Body/>
    </BrowserRouter>
  </StrictMode>,
)
