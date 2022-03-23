import { MapContainer, TileLayer, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`
const TILE = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'

function getBounds(path) {
  const bounds = path.reduce((agg, { lat, lon }) => ({
    latMin: agg.latMin ? Math.min(agg.latMin, lat) : lat,
    lonMin: agg.lonMin ? Math.min(agg.lonMin, lon) : lon,
    latMax: agg.latMax ? Math.max(agg.latMax, lat) : lat,
    lonMax: agg.lonMax ? Math.max(agg.lonMax, lon) : lon,
  }), {})
  const { latMin, lonMin, latMax, lonMax } = bounds
  return [
    [latMin, lonMin],
    [latMax, lonMax],
  ]
}

const getPositions = (path) => path.map(({ lat, lon }) => ([lat, lon]))

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
