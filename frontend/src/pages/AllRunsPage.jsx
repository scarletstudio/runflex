import { Outlet } from "react-router-dom"

export default function AllRunsPage(props) {
  return (
    <div className="AllRunPage">
      <h1>Runs</h1>
      <p>All runs will appear here.</p>
      <Outlet />
    </div>
  )
}
