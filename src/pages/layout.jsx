import { getGenres } from "@/util/API"
import { useEffect, useState } from "react"
import NextTopLoader from "nextjs-toploader"

import Navbar from "@/components/Navbar/index.js"

export default function Layout({ children }) {
  const [genres, setGenres] = useState([])

  //get all genres
  async function fetchGenres() {
    const genresList = await getGenres()
    setGenres(genresList)
  }
  useEffect(() => {
    fetchGenres()
  }, [])

  return (
    <>
      <Navbar genres={genres} />
      <main className="min-h-[100vh]">{children}</main>
      <NextTopLoader color="red" showSpinner={false} />
    </>
  )
}
