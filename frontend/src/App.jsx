import { useEffect } from 'react'
import './App.css'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function App() {
  useEffect(async () => {
    const req = await fetch(BACKEND_URL, { credentials: 'include' })
    const res = await req.json()
    console.log(res)
  }, [])

  return (
    <div className="App">
      <h1>RunFlex</h1>
    </div>
  )
}

export default App
