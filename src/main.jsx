import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MenuContextProvider from './context/MenuContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MenuContextProvider>
    <App />
  </MenuContextProvider>
)
