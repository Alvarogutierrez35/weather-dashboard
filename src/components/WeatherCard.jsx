function getWeatherEmoji(id) {
  if (id >= 200 && id < 300) return '⛈️'
  if (id >= 300 && id < 400) return '🌦️'
  if (id >= 500 && id < 600) return '🌧️'
  if (id >= 600 && id < 700) return '❄️'
  if (id >= 700 && id < 800) return '🌫️'
  if (id === 800) return '☀️'
  if (id > 800) return '☁️'
  return '🌡️'
}

function WeatherCard({ data }) {
  const emoji = getWeatherEmoji(data.weather[0].id)
  const description = data.weather[0].description

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {data.name}, {data.sys.country}
          </h2>
          <p className="text-gray-400 text-sm capitalize">{description}</p>
        </div>
        <span className="text-5xl">{emoji}</span>
      </div>

      <div className="text-6xl font-bold text-blue-600 mb-6">
        {Math.round(data.main.temp)}°C
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-50 rounded-xl p-3 text-center">
          <p className="text-xs text-blue-400 mb-1">Sensación</p>
          <p className="text-sm font-semibold text-blue-700">
            {Math.round(data.main.feels_like)}°C
          </p>
        </div>
        <div className="bg-blue-50 rounded-xl p-3 text-center">
          <p className="text-xs text-blue-400 mb-1">Humedad</p>
          <p className="text-sm font-semibold text-blue-700">
            {data.main.humidity}%
          </p>
        </div>
        <div className="bg-blue-50 rounded-xl p-3 text-center">
          <p className="text-xs text-blue-400 mb-1">Viento</p>
          <p className="text-sm font-semibold text-blue-700">
            {Math.round(data.wind.speed * 3.6)} km/h
          </p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard