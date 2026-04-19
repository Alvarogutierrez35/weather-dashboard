import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ErrorMessage from './components/ErrorMessage.jsx'
import LoadingSpinner from './components/LoadingSpinner'
console.log(import.meta.env)


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWeather = async (city) => {
    setLoading(true)
    setError(null)
    setWeather(null)

    try {
      const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?q=${city}&appid=${API_KEY}&units=metric&lang=es`
      )

      if (!res.ok) throw new Error('Ciudad no encontrada')

      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 py-10 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-2">
          Dashboard del Clima
        </h1>
        <p className="text-center text-blue-400 mb-8 text-sm">
          Busca cualquier ciudad del mundo
        </p>
        <SearchBar onSearch={fetchWeather} />
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  )
}

export default App