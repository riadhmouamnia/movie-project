const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

//Images base URL
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"
export const IMAGE_BASE_URL_ORIGINAL = "https://image.tmdb.org/t/p/original/"

export const requests = {
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

// movies for home page
export const getHomePageMovies = async (URL) => {
  const res = await fetch(URL)
  const data = await res.json()
  return data.results
}

export const getRandomMovie = async () => {
  const movies = await getHomePageMovies(requests.requestTrending)
  const movie = await movies[Math.floor(Math.random() * movies.length)]
  return movie
}

// get movies with all pages for the movies page
export const fetchMovies = async (query, category, genre, page) => {
  if (query) {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
    )
    const data = await res.json()
    return data
  } else if (category) {
    const res = await fetch(
      `${BASE_URL}/movie/${category}?api_key=${API_KEY}&page=${page}`,
    )
    const data = await res.json()
    return data
  } else if (genre) {
    const res = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${page}`,
    )
    const data = await res.json()
    return data
  } else {
    const res = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&${page}`,
    )
    const data = await res.json()
    return data
  }
}

export const getMovieById = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
  const data = await res.json()
  return data
}

export const getMovieTrailer = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
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

// fetch Actors
export const fetchActors = async (query, page) => {
  if (query && page) {
    try {
      const res = await fetch(
        `${BASE_URL}/search/person?api_key=${API_KEY}&page=${page}&query=${query}`,
      )
      const data = await res.json()

      return data
    } catch (error) {
      console.log(error)
    }
  } else {
    try {
      const res = await fetch(
        `${BASE_URL}/person/popular?api_key=${API_KEY}&page=${page}`,
      )
      const data = await res.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSingleActor = async (actorId) => {
  const res = await fetch(`${BASE_URL}/person/${actorId}?api_key=${API_KEY}`)
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

// TV Shows
export const getPopularTVShows = async (page) => {
  const res = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&page=${page}`,
  )
  const data = await res.json()

  return data
}
