import { Link, useParams } from 'react-router-dom';
import { useBackendFetchJson } from '../common/utils'
import RunMap from '../common/RunMap'
import '../styles/RunPage.css'

export default function RunPage() {
  const { runId } = useParams()
  const res = useBackendFetchJson({
    route: `/runs/${runId}`,
    deps: [runId],
  })
  const isLoaded = runId && res?.success
  const runMapComponent = <RunMap path={res?.tracks || []} />
  return isLoaded ? (
    <div className="RunPage Page">
      <h1>{res?.location || 'Run'}</h1>
      <p>Run ID: {res?.id}</p>
      <p>
        <Link to="/runs">Back to My Runs</Link>
      </p>
      {res?.tracks && runMapComponent}
    </div>
  ) : (
    <div className="RunPage Page">
      <p>Loading...</p>
    </div>
  )
}
