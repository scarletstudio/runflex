import { Link } from 'react-router-dom'
import '../styles/HomePage.css'

export default function HomePage() {
  return (
    <div className="HomePage Page Content">
      <h1>RunFlex</h1>
      <p>An app for runners to track and share their achievements.</p>
        <Link to="/runs" className="Button Primary">My Runs</Link>
    </div>
  )
}
