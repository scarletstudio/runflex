import { useParams } from 'react-router-dom';
import { useBackendFetchJson } from '../common/utils'

export default function RunPage() {
  const { runId } = useParams()
  const runData = useBackendFetchJson(`/run/${runId}`)
  return (
    <div className="RunPage Page">
      <h2>Run</h2>
      <p>Data about your run will appear here.</p>
      <p>Run ID: {runId}</p>
      <pre>{JSON.stringify(runData, null, 2)}</pre>
    </div>
  )
}
