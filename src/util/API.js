const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

//Images base URL
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"
export const IMAGE_BASE_URL_ORIGINAL = "https://image.tmdb.org/t/p/original/"

const requests = {
  requestPopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=4`,
  requestTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  requestTrending: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
  requestHorror: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  requestUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=2`,
  requestAnimation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
  requestGenres: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
}

export const getGenres = async () => {
  const res = await fetch(requests.requestGenres)
  const data = await res.json()
  return data.genres
}

export const getTrendingMovies = async () => {
  const res = await fetch(requests.requestTrending)
  const data = await res.json()
  return data.results
}
export const getTopRatedMovies = async () => {
  const res = await fetch(requests.requestTopRated)
  const data = await res.json()
  return data.results
}
export const getPopularMovies = async () => {
  const res = await fetch(requests.requestPopular)
  const data = await res.json()
  return data.results
}
export const getHorrorMovies = async () => {
  const res = await fetch(requests.requestHorror)
  const data = await res.json()
  return data.results
}
export const getUpcomingMovies = async () => {
  const res = await fetch(requests.requestUpcoming)
  const data = await res.json()
  return data.results
}

export const getAnime = async () => {
  const res = await fetch(requests.requestAnimation)
  const data = await res.json()
  return data.results
}

export const getRandomMovie = async () => {
  const movies = await getTrendingMovies()
  const movie = await movies[Math.floor(Math.random() * movies.length)]

  return movie
}

export const getMovieTrailer = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
  const data = await res.json()
  return data
}

export const getMoviesBySearch = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  )
  const data = await res.json()
  return data.results
}

export const getMoviesByGenre = async (genreId) => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`,
  )
  const data = await res.json()
  return data.results
}
export const getMoviesByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`)
  const data = await res.json()
  return data.results
}

export const getMovieById = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
  const data = await res.json()
  return data
}

export const getSimilarMovies = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`)
  const data = await res.json()
  return data.results
}
export const getMovieActors = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
  const data = await res.json()
  return data.cast
}

export const getActors = async (currentPage) => {
  const res = await fetch(
    `${BASE_URL}/person/popular?api_key=${API_KEY}&page=${currentPage}`,
  )
  const data = await res.json()
  return data
}
export const getSingleActor = async (actorId) => {
  const res = await fetch(`${BASE_URL}/person/${actorId}?api_key=${API_KEY}`)
  const data = await res.json()
  return data
}

// get all pages
export const getAllMoviesByGenre = async (genreId, page) => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`,
  )
  const data = await res.json()
  return data
}

export const getAllMoviesBySearch = async (query, page) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  )
  const data = await res.json()
  return data
}

export const getAllMoviesByCategory = async (category, page) => {
  const res = await fetch(
    `${BASE_URL}/movie/${category}?api_key=${API_KEY}&page=${page}`,
  )
  const data = await res.json()
  return data
}

export const getMoviesByActorId = async (actorId) => {
  const res = await fetch(
    `${BASE_URL}/person/${actorId}/movie_credits?api_key=${API_KEY}`,
  )
  const data = await res.json()

  return data.cast
}
