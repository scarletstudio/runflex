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
