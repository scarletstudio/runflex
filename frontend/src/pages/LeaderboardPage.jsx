import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function LeaderboardPage() {
  return (
    <div className="LeaderboardPage Page Content">
      <h1>Leaderboard</h1>
      <p>Coming soon...</p>
      <Link to="/runs" className="NoDecorate">
        <FontAwesomeIcon icon="arrow-left" className="IconBefore" />
        <span>Back to My Runs</span>
      </Link>
    </div>
  )
}
