import { Link, useLocation } from 'react-router-dom'
import '../styles/Nav.css'

const navigation = [
  {
    route: '/',
    name: 'RunFlex',
  },
  {
    route: '/runs',
    name: 'My Runs',
  },
  {
    route: '/leaderboard',
    name: 'Leaderboard',
  },
  {
    route: '/status',
    name: 'Status',
  },
]

export default function Nav() {
  const { pathname } = useLocation()
  return (
    <div className="Nav">
      {navigation.map(({ route, name }, i) => (
        <Link
          key={i}
          to={route}
          className={pathname === route ? 'CurrentPage' : ''}
        >
          {name}
        </Link>
      ))}
    </div>
  )
}
