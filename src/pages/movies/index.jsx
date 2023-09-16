import MovieCard from "@/components/MovieCard"
import SearchBar from "@/components/SearchBar"
import {
  getAllMoviesByCategory,
  getMoviesByCategory,
  getMoviesByCategoryAndPage,
  getMoviesByGenre,
  getMoviesBySearch,
} from "@/util/API"
import Image from "next/image"

function MoviesPage({ movies, category, genre, name, search }) {
  console.log({ name, movies })
  return (
    <>
      <div className="w-full h-[600px] text-white mb-4 ">
        <div className="w-full h-full">
          <div className="absolute w-full h-[600px] bg-gradient-to-b after: from-black opacity-70 z-10"></div>
          <div className="h-[600px] relative">
            <Image
              fill
              className="w-full h-full object-cover"
              src="https://www.screentest.xyz/wp-content/uploads/2022/09/netflix.jpg"
              alt="cover image"
              priority
            />
            <div className="absolute w-full h-[600px] bg-gradient-to-t from-black opacity-70 z-10"></div>
          </div>
          <div className="absolute w-full flex flex-col items-center text-center top-[20%] p-4 md:p-8 z-20 my-4">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Unlimited movies, TV shows, and more
            </h1>
            <h2 className="md:text-3xl text-xl font-semibold">
              Start buy looking for your favorite movie
            </h2>
            <div className="min-w-[80%] md:min-w-[50%] mt-8">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
      <main>
        {/* IF WE HAVE A SEARCH */}
        {search && (
          <>
            <h2 className="text-4xl font-black text-center dark:text-white mt-20">
              {search}
            </h2>
            <div className="flex gap-2 flex-wrap w-full justify-center my-20">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        )}
        {/* IF WE HAVE A GENRE SELECTED */}
        {genre && (
          <>
            <h2 className="text-4xl font-black text-center dark:text-white mt-20">
              {name}
            </h2>
            <div className="flex gap-2 flex-wrap w-full justify-center my-20">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        )}
        {/* IF WE HAVE A CATEGORY SELECTED */}
        {category && (
          <>
            <h2 className="text-4xl font-black text-center dark:text-white mt-20">
              {name}
            </h2>
            <div className="flex gap-2 flex-wrap w-full justify-center my-20">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        )}
        {/* IF WE HAVE NOTHING SELECTED */}
        {!category & !genre & !search && (
          <>
            <h2 className="text-4xl font-black text-center dark:text-white mt-20">
              {name}
            </h2>
            <div className="flex gap-2 flex-wrap w-full justify-center my-20">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
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
