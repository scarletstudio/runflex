import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`

// Source: http://alexurquhart.github.io/free-tiles/
export const TILES = {
  OSM_HUMANITARIAN: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  ESRI_DARK_GRAY: 'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
}

function choose(compare, prev, curr) {
  return prev ? compare(prev, curr) : curr
}

function getBounds(path) {
  if (path.length === 0) {
    return [[0, 0], [0, 0]]
  }
  const bounds = path.reduce((agg, { latitude, longitude }) => ({
    latMin: choose(Math.min, agg.latMin, latitude),
    lonMin: choose(Math.min, agg.lonMin, longitude),
    latMax: choose(Math.max, agg.latMax, latitude),
    lonMax: choose(Math.max, agg.lonMax, longitude),
  }), {})
  const { latMin, lonMin, latMax, lonMax } = bounds
  return [
    [latMin, lonMin],
    [latMax, lonMax],
  ]
}

const getPositions = (path) => path.map(({ latitude, longitude }) => (
  [latitude, longitude]
))

function RunPathPolyline(props) {
  const { path = [], pathOptions } = props
  const bounds = getBounds(path)
  const positions = getPositions(path)
  const map = useMap()
  map.fitBounds(bounds)
  return (
    <Polyline
      className="RunPathPolyline"
      positions={positions}
      pathOptions={pathOptions}
    />
  )
}

export function RunMap(props) {
  const { tile } = props
  return (
    <div className="RunMap">
      <MapContainer>
        <TileLayer attribution={ATTRIBUTION} url={tile} />
        <RunPathPolyline {...props} />
      </MapContainer>
    </div>
  )
}
