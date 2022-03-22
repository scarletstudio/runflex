import { Outlet } from "react-router-dom"
import Nav from "../common/Nav"

export default function Layout(props) {
  return (
    <div className="Layout">
      <Nav />
      <Outlet />
    </div>
  )
}
