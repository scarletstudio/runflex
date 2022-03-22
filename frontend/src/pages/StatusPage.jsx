import { Link } from 'react-router-dom';
import { useFetchJson } from '../common/utils';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export default function StatusPage() {
  const status = useFetchJson(BACKEND_URL)

  return (
    <div className="StatusPage">
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
