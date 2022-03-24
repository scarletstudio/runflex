import { Link, useParams } from 'react-router-dom';
import { useBackendFetchJson } from '../common/utils'
import RunMap from '../common/RunMap'
import '../styles/RunPage.css'

function MetricCard(props) {
  const { title, value, units } = props
  return (
    <div className="MetricCard Content">
      
      <span className="ValueContainer">
        <span className="Value">{value}</span>
        <span className="Units">{units}</span>
      </span>
      <span className="Title">{title}</span>
    </div>
  )
}

function RunMetrics({ metrics }) {
  return (
    <div className="RunMetrics">
      {metrics.map((card) => (
        <MetricCard {...card} />
      ))}
    </div>
  )
}

export default function RunPage() {
  const { runId } = useParams()
  const res = useBackendFetchJson({
    route: `/runs/${runId}`,
    deps: [runId],
  })
  const isLoaded = runId && res?.success
  const runMapComponent = <RunMap path={res?.tracks || []} />
  const runMetricsComponent = <RunMetrics metrics={res?.metrics || []} />
  return isLoaded ? (
    <div className="RunPage">
      {res?.tracks && runMapComponent}
      <div className="Page Content">
        <h1>{res?.location || 'Run'}</h1>
        <p>
          <Link to="/runs">Back to My Runs</Link>
        </p>
      </div>
      {res?.metrics && runMetricsComponent}
    </div>
  ) : (
    <div className="RunPage Page Content">
      <p>Loading...</p>
    </div>
  )
}
