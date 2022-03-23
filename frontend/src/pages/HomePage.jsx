import { Link } from 'react-router-dom';
import '../styles/HomePage.css'

export default function HomePage() {
  return (
    <div className="HomePage MainPanel Page">
      <h1>RunFlex</h1>
      <p>An app for runners to track and share their achievements.</p>
      <p>
        <Link to="/runs">My Runs</Link>
      </p>
    </div>
  )
}
