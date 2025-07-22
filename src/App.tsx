
import { Route, Routes } from 'react-router-dom'
import SearchPage from './pages/search-page/search-page'
import MovieDetailsPage from './pages/search-page/movie-details-pages/movie-details'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
