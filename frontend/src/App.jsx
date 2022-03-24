import { useState, useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './common/context'
import AllRunsPage from './pages/AllRunsPage'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import LeaderboardPage from './pages/LeaderboardPage'
import RunPage from './pages/RunPage'
import StatusPage from './pages/StatusPage'

function AppInner() {
  const { theme } = useContext(ThemeContext)
  useEffect(() => {
    document.body.classList.remove(...document.body.classList)
    document.body.classList.add(theme)
  }, [theme])
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
  const [ theme, setTheme ] = useState('ThemeDark')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AppInner />
    </ThemeContext.Provider>
  )
}
