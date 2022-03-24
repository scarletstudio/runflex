import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useBackendFetchJson } from '../common/utils'

export default function StatusPage() {
  const status = useBackendFetchJson({ route: '/status' })

  return (
    <div className="StatusPage Page Content">
      <h1>Status</h1>
      <p>What is the status of the backend?</p>
      <p>Let us check:</p>
      <pre>{JSON.stringify(status, null, 2)}</pre>
      <Link to="/runs" className="NoDecorate">
        <FontAwesomeIcon icon="arrow-left" className="IconBefore" />
        <span>Back to My Runs</span>
      </Link>
    </div>
  )
}
