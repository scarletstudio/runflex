import { useState, useEffect } from 'react'

export function useFetchJson(url, options = {}, deps = []) {
  const [ response, setResponse ] = useState(null)
  useEffect(async () => {
    const req = await fetch(url, options)
    const res = await req.json()
    setResponse(res)
  }, deps)
  return response
}
