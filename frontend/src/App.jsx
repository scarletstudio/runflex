import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import StatusPage from './pages/StatusPage'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <h1>RunFlex</h1>
      <p>An app for runners to track and share their achievements.</p>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/status" element={<StatusPage />} />
      </Routes>
    </div>
  )
}

export default App
