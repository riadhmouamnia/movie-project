const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
}

export const getGenres = async () => {
  const res = await fetch(`${BASE_URL}/genre/movie/list?language=en`, options)
  const data = await res.json()
  return data.genres
}
