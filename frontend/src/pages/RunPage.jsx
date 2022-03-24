import { useParams } from 'react-router-dom';
import { useBackendFetchJson } from '../common/utils'
import RunMap from '../common/RunMap'
import '../styles/RunPage.css'

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
    route: `/runs/${runId}`,
    deps: [runId],
  })
  const runMapComponent = (
    <RunMap path={res?.tracks || []} />
  )
  return (
    <div className="RunPage Page">
      <h2>Runs</h2>
      <p>Run ID: {res?.id}</p>
      {res?.tracks && runMapComponent}
    </div>
  )
}
