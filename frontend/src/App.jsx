import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllRunsPage from './pages/AllRunsPage'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import LeaderboardPage from './pages/LeaderboardPage'
import RunPage from './pages/RunPage'
import StatusPage from './pages/StatusPage'

const registeredIcons = [
  faArrowLeft,
  faChevronRight,
]

function App() {
  useEffect(() => {
    // Set dark theme in body CSS
    document.body.classList.add('ThemeDark')
    // Register icons in library
    library.add(registeredIcons)
  }, [])
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
            <Route path="leaderboard" element={<LeaderboardPage />} />
            <Route path="status" element={<StatusPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
