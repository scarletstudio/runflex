import { useParams } from 'react-router-dom';
import { useBackendFetchJson } from '../common/utils'
import RunMap from '../common/RunMap'
import mockPath from '../common/mock-path'
import '../styles/RunPage.css'

const PATH_OPTIONS = {
  color: 'black'
}

export default function RunPage() {
  const { runId } = useParams()
  if (!runId) {
    return (
      <div className="RunPage Page">
        <h2>Runs</h2>
        <p>Choose a run.</p>
      </div>
    )
  }

  const res = useBackendFetchJson({
    route: `/run/${runId}`,
    deps: [runId],
  })
  const runMapComponent = res?.tracks
    ? (
      <RunMap key={runId} path={res?.tracks || []} pathOptions={PATH_OPTIONS} />
    ) : null
  
  return (
    <div className="RunPage Page">
      <h2>Runs</h2>
      <p>Run ID: {res?.id}</p>
      {runMapComponent}
    </div>
  )
}
