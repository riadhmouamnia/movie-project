import MoviesCardGridPlaceHolder from "@/components/MoviesCardGrid/MoviesCardGridPlaceHolder"
import PageCover from "@/components/PageCover"
import SearchBar from "@/components/SearchBar"

import {
  getAllMoviesByCategory,
  getAllMoviesByGenre,
  getAllMoviesBySearch,
} from "@/util/API"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const MoviesCardGrid = dynamic(() => import("@/components/MoviesCardGrid"), {
  loading: () => <MoviesCardGridPlaceHolder />,
})
const SimpleCover = dynamic(() => import("@/components/SimpleCover"), {
  loading: () => <PageCover />,
})

function MoviesPage({ category, genre, name, search }) {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      if (search) {
        try {
          const moviesData = await getAllMoviesBySearch(search, currentPage)
          const pages = moviesData.total_pages
          setTotalPages(pages > 500 ? 500 : pages)
          setMovies(moviesData.results)
        } catch (error) {
          console.error(error)
          setError(error.message)
        }
      } else if (category) {
        try {
          const moviesData = await getAllMoviesByCategory(category, currentPage)
          const pages = moviesData.total_pages
          setTotalPages(pages > 500 ? 500 : pages)
          setMovies(moviesData.results)
        } catch (error) {
          console.error(error)
          setError(error.message)
        }
      } else if (genre) {
        try {
          const moviesData = await getAllMoviesByGenre(genre, currentPage)
          const pages = moviesData.total_pages
          setTotalPages(pages > 500 ? 500 : pages)
          setMovies(moviesData.results)
        } catch (error) {
          console.error(error)
          setError(error.message)
        }
      } else {
        try {
          const moviesData = await getAllMoviesByCategory(
            "now_playing",
            currentPage,
          )
          const pages = moviesData.total_pages
          setTotalPages(pages > 500 ? 500 : pages)
          setMovies(moviesData.results)
        } catch (error) {
          console.error(error)
          setError(error.message)
        }
      }
    }

    fetchMovies()
  }, [currentPage, totalPages])

  useEffect(() => {
    setCurrentPage(1)
  }, [category, genre, name, search])
  return (
    <>
      <SimpleCover
        imageUrl="https://www.screentest.xyz/wp-content/uploads/2022/09/netflix.jpg"
        title="Unlimited movies, TV shows, and more"
        subTitle="Start buy looking for your favorite movie"
        searchBar={<SearchBar />}
      />
      <main>
        {/* IF WE HAVE A SEARCH */}
        {search && (
          <MoviesCardGrid
            title={search}
            movies={movies}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
        {/* IF WE HAVE A GENRE SELECTED */}
        {genre && (
          <MoviesCardGrid
            title={name}
            movies={movies}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
        {/* IF WE HAVE A CATEGORY SELECTED */}
        {category && (
          <MoviesCardGrid
            title={name}
            movies={movies}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
        {/* IF WE HAVE NOTHING SELECTED */}
        {!category & !genre & !search && (
          <MoviesCardGrid
            title={name}
            movies={movies}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </>
  )
}

export default MoviesPage

export async function getServerSideProps({ query }) {
  const { category, genre, name, search } = query

  if (category) {
    return {
      props: {
        category,
        name,
      },
    }
  } else if (genre) {
    return {
      props: {
        genre,
        name,
      },
    }
  } else if (search) {
    return {
      props: {
        search,
      },
    }
  } else {
    return {
      props: {
        name: "Now Playing",
      },
    }
  }
}
