import { MapContainer, TileLayer, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`
const TILE = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'

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

export default function RunMap(props) {
  const { path, pathOptions } = props
  const bounds = getBounds(path)
  const positions = getPositions(path)
  return (
    <div className="RunMap">
      <MapContainer bounds={bounds}>
        <TileLayer attribution={ATTRIBUTION} url={TILE} />
        <Polyline positions={positions} pathOptions={pathOptions} />
      </MapContainer>
    </div>
  )
}
