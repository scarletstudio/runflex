import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useBackendFetchJson, formatRunDateTime } from '../common/utils'
import '../styles/AllRunsPage.css'

const RUNNER_ID = '114650'

function RunItem({ data }) {
  const { id, location, start_time: startTime } = data
  return (
    <Link to={`/runs/${id}`} className="RunItem Content">
        <FontAwesomeIcon icon="chevron-right" className="IconGo" />
        <span className="Title">{location}</span>
        <span className="Subtitle">{formatRunDateTime(startTime)}</span>
    </Link>
  )
}

export default function AllRunsPage() {
  const res = useBackendFetchJson({
    route: `/all_runs/${RUNNER_ID}`
  })
  const runs = res?.runs || []
  return (
    <div className="AllRunsPage">
      <div className="Content Page">
        <h1>My Runs</h1>
      </div>
      <div className="RunItemContainer">
        {runs.map((runData) => (
          <RunItem key={runData.id} data={runData} />
        ))}
      </div>
    </div>
  )
}
