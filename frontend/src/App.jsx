import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import AllRunsPage from './pages/AllRunsPage'
import RunPage from './pages/RunPage'
import StatusPage from './pages/StatusPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<Layout />}>
            <Route path="runs">
              <Route index element={<AllRunsPage />} />
              <Route path=":runId" element={<RunPage />} />
            </Route>
            <Route path="status" element={<StatusPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
