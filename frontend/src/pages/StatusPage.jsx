import { Link } from 'react-router-dom';
import { useBackendFetchJson } from '../common/utils';

export default function StatusPage() {
  const status = useBackendFetchJson({ route: '/' })

  return (
    <div className="StatusPage MainPanel Page">
      <h2>Status</h2>
      <p>What is the status of the backend?</p>
      <p>Let us check:</p>
      <pre>{JSON.stringify(status, null, 2)}</pre>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  )
}
