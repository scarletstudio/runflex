import { useParams } from 'react-router-dom';

export default function RunPage() {
  const { runId } = useParams()
  return (
    <div className="RunPage">
      <h2>Run</h2>
      <p>Data about your run will appear here.</p>
      <p>Run ID: {runId}</p>
    </div>
  )
}
