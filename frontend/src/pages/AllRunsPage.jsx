import { Link, Outlet } from "react-router-dom"
import '../styles/AllRunsPage.css'

function RunItem({ data }) {
  const { id, name } = data
  return (
    <div className="RunItem">
      <p>
        <Link to={`/runs/${id}`}>{name}</Link>
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
  const allRuns = [
    { id: 101, name: 'Sunday Run' },
    { id: 102, name: 'My First Run' },
    { id: 103, name: 'Simple Jog' },
  ]
  return (
    <div className="AllRunsPage">
      <div className="SidePanel">
        <AllRuns data={allRuns} />
      </div>
      <div className="MainPanel">
        <Outlet />
      </div>
    </div>
  )
}
