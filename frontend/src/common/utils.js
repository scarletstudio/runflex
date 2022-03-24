import { useState, useEffect } from 'react'

// Data Fetching

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export function useRawFetchJson({
  url,
  options = {},
  deps = []
}) {
  const [ response, setResponse ] = useState(null)
  useEffect(async () => {
    const req = await fetch(url, options)
    const res = await req.json()
    setResponse(res)
  }, deps)
  return response
}

export function useBackendFetchJson({ route, ...args }) {
  return useRawFetchJson({
    url: `${BACKEND_URL}${route}`,
    ...args,
  })
}

// Formatting

const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
})

export function formatRunDateTime(ts) {
  return ts && dateTimeFormat.format(new Date(ts))
}
