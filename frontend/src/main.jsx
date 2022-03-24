import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/reset.css'
import './styles/main.css'
import './styles/theme.css'

// Register icons in library for use throughout the frontend
const registeredIcons = [
  faArrowLeft,
  faChevronRight,
]
library.add(registeredIcons)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
