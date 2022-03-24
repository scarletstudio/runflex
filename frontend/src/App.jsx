import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './common/context'
import { useThemeManager } from './common/theme'
import AllRunsPage from './pages/AllRunsPage'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import LeaderboardPage from './pages/LeaderboardPage'
import RunPage from './pages/RunPage'
import StatusPage from './pages/StatusPage'

function AppInner() {
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

export default function App() {
  const themeManager = useThemeManager()
  return (
    <ThemeContext.Provider value={themeManager}>
      <AppInner />
    </ThemeContext.Provider>
  )
}
