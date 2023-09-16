import MoviesCardGridPlaceHolder from "@/components/MoviesCardGrid/MoviesCardGridPlaceHolder"
import PageCover from "@/components/PageCover"
import SearchBar from "@/components/SearchBar"
import {
  getMoviesByCategory,
  getMoviesByGenre,
  getMoviesBySearch,
} from "@/util/API"
import dynamic from "next/dynamic"

const MoviesCardGrid = dynamic(() => import("@/components/MoviesCardGrid"), {
  loading: () => <MoviesCardGridPlaceHolder />,
})
const SimpleCover = dynamic(() => import("@/components/SimpleCover"), {
  loading: () => <PageCover />,
})

function MoviesPage({ movies, category, genre, name, search }) {
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
        {search && <MoviesCardGrid title={search} movies={movies} />}
        {/* IF WE HAVE A GENRE SELECTED */}
        {genre && <MoviesCardGrid title={name} movies={movies} />}
        {/* IF WE HAVE A CATEGORY SELECTED */}
        {category && <MoviesCardGrid title={name} movies={movies} />}
        {/* IF WE HAVE NOTHING SELECTED */}
        {!category & !genre & !search && (
          <MoviesCardGrid title={name} movies={movies} />
        )}
      </main>
    </>
  )
}

export default MoviesPage

export async function getServerSideProps({ query }) {
  const { category, genre, name, search } = query

  if (category) {
    const movies = await getMoviesByCategory(category)
    return {
      props: {
        movies,
        category,
        name,
      },
    }
  } else if (genre) {
    const movies = await getMoviesByGenre(genre)
    return {
      props: {
        movies,
        genre,
        name,
      },
    }
  } else if (search) {
    const movies = await getMoviesBySearch(search)
    return {
      props: {
        movies,
        search,
      },
    }
  } else {
    const movies = await getMoviesByCategory("now_playing")
    return {
      props: {
        movies,
        name: "Now Playing",
      },
    }
  }
}
