import { Link } from 'react-router-dom';
import '../styles/Nav.css'

export default function Nav() {
  return (
    <div className="Nav">
      <Link to="/">RunFlex</Link>
      <Link to="/runs">My Runs</Link>
      <Link to="/">Leaderboard</Link>
      <Link to="/status">Status</Link>
    </div>
  )
}
