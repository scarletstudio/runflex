import { Link } from 'react-router-dom';
import '../styles/Nav.css'

export default function Nav() {
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      <Link to="/runs">Runs</Link>
      <Link to="/">Leaderboard</Link>
      <Link to="/status">Status</Link>
    </div>
  )
}
