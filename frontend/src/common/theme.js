import { useState, useEffect } from 'react'
import { TILES } from './RunMap'

export const THEME = {
  Dark: 'ThemeDark',
  Light: 'ThemeLight',
}

export const THEME_DETAIL = {
  [THEME.Dark]: {
    tile: TILES.ESRI_DARK_GRAY,
  },
  [THEME.Light]: {
    tile: TILES.OSM_HUMANITARIAN,
  },
}

const DEFAULT_THEME = THEME.Dark

const LOCAL_THEME_KEY = 'storedTheme'

function applyTheme(theme) {
  document.body.classList.remove(...document.body.classList)
  document.body.classList.add(theme)
}

export function useThemeManager() {
  // Check if a theme is stored in localStorage
  const storedTheme = localStorage.getItem(LOCAL_THEME_KEY) || DEFAULT_THEME
  // Create a state to manage the frontend theme
  const [ theme, setStateTheme ] = useState(storedTheme)
  // Set initial theme
  applyTheme(theme)
  // Listen for changes to theme
  useEffect(() => {
    applyTheme(theme)
  }, [theme])
  // Create a new setter that sets both the frontend and localStorage
  const setTheme = (newTheme) => {
    localStorage.setItem(LOCAL_THEME_KEY, newTheme)
    setStateTheme(newTheme)
  }
  return { theme, setTheme }
}
