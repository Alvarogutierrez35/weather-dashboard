import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!city.trim()) return
    onSearch(city.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Ej: Santiago, Tokyo, Madrid..."
        className="flex-1 border border-blue-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-medium transition-colors"
      >
        Buscar
      </button>
    </form>
  )
}

export default SearchBar