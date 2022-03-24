import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft as iconBack } from '@fortawesome/free-solid-svg-icons'
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

function RunMetrics({ metrics = [] }) {
  return (
    <div className="RunMetrics">
      {metrics.map((card) => (
        <MetricCard {...card} />
      ))}
    </div>
  )
}

function RunDetails(props) {
  const { success, location } = props
  return (
    <div className="RunDetails Page Content">
      <h1>{location || 'Run'}</h1>
      <p>
        <Link to="/runs" className="LinkWithIcon">
          <FontAwesomeIcon icon={iconBack} />
          <span>Back to My Runs</span>
        </Link>
      </p>
      {success || <p>Loading...</p>}
    </div>
  )
}

export default function RunPage() {
  const { runId } = useParams()
  const res = useBackendFetchJson({
    route: `/runs/${runId}`,
    deps: [runId],
  })
  return (
    <div className="RunPage">
      <RunMap path={res?.tracks} />
      <RunDetails {...res} />
      <RunMetrics metrics={res?.metrics} />
    </div>
  )
}
