import { useState, useEffect } from 'react'
import './App.css'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function App() {
  const [hello, setHello] = useState({})

  useEffect(async () => {
    const req = await fetch(BACKEND_URL)
    const res = await req.json()
    setHello(res)
  }, [])

  return (
    <div className="App">
      <h1>RunFlex</h1>
      <p>An app for runners to track and share their achievements.</p>
      <h2>Status</h2>
      <p>What is the status of the backend?</p>
      <p>Let us check:</p>
      <pre>{JSON.stringify(hello, null, 2)}</pre>
    </div>
  )
}

export default App
