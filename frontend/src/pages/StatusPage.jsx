import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../common/context'
import { THEME } from '../common/theme'
import { useBackendFetchJson } from '../common/utils'

export default function StatusPage() {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = () => {
    const newTheme = theme === THEME.Dark ? THEME.Light : THEME.Dark
    setTheme(newTheme)
  }
  const status = useBackendFetchJson({ route: '/status' })
  return (
    <div className="StatusPage Page Content">
      <h1>Status</h1>
      <p>What is the status of the backend?</p>
      <p>Let us check:</p>
      <pre>{JSON.stringify(status, null, 2)}</pre>
      <p>
        <span
          className="Button Primary"
          onClick={toggleTheme}
        >
          Toggle Theme
        </span>
      </p>
      <Link to="/runs" className="NoDecorate">
        <FontAwesomeIcon icon="arrow-left" className="IconBefore" />
        <span>Back to My Runs</span>
      </Link>
    </div>
  )
}
