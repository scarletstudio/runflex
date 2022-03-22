import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import AllRunsPage from './pages/AllRunsPage'
import RunPage from './pages/RunPage'
import StatusPage from './pages/StatusPage'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<Layout />}>
          <Route path="runs" element={<AllRunsPage />}>
            <Route path=":runId" element={<RunPage />} />
          </Route>
          <Route path="status" element={<StatusPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
