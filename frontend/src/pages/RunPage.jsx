import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { RunMap } from '../common/RunMap'
import { ThemeContext } from '../common/context'
import { THEME_DETAIL } from '../common/theme'
import { useBackendFetchJson, formatRunDateTime } from '../common/utils'
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
      {metrics.map((card, i) => (
        <MetricCard key={i} {...card} />
      ))}
    </div>
  )
}

function RunDetails(props) {
  const { success, location, start_time: startTime } = props
  return (
    <div className="RunDetails Page Content">
      <Link to="/runs" className="NoDecorate">
        <FontAwesomeIcon icon="arrow-left" className="IconBefore" />
        <span>Back to My Runs</span>
      </Link>
      <h1>{location || 'Run'}</h1>
      <p>{formatRunDateTime(startTime)}</p>
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
  const { theme } = useContext(ThemeContext)
  const tile = THEME_DETAIL?.[theme]?.tile
  return (
    <div className="RunPage">
      <RunMap path={res?.tracks} tile={tile} />
      <RunDetails {...res} />
      <RunMetrics metrics={res?.metrics} />
    </div>
  )
}
