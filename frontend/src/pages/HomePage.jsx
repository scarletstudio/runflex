import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="HomePage">
      <h2>Home</h2>
      <p>Welcome home.</p>
      <p>
        <Link to="/status">Status</Link>
      </p>
    </div>
  )
}
