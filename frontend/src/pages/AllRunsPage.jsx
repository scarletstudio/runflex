import { Link, Outlet } from "react-router-dom"
import { useBackendFetchJson } from '../common/utils'
import '../styles/AllRunsPage.css'

const RUNNER_ID = '114650'

function RunItem({ data }) {
  const { id, location } = data
  return (
    <div className="RunItem">
      <p>
        <Link to={`/runs/${id}`}>{location}</Link>
      </p>
    </div>
  )
}

function AllRuns({ data }) {
  return (
    <div className="AllRuns">
      {data.map((runData) => (
        <RunItem key={runData.id} data={runData} />
      ))}
    </div>
  )
}

export default function AllRunsPage() {
  const res = useBackendFetchJson({
    route: `/all_runs/${RUNNER_ID}`
  })
  return (
    <div className="AllRunsPage">
      <div className="SidePanel">
        <AllRuns data={res?.runs || []} />
      </div>
      <div className="MainPanel">
        <Outlet />
      </div>
    </div>
  )
}
