import Head from "next/head"
import dynamic from "next/dynamic"

// utils import
import {
  getMovieActors,
  getMovieById,
  getMovieTrailer,
  getSimilarMovies,
} from "@/util/API"

// component import
import PosterImagePlaceHolder from "@/components/PosterImage/PosterImagePlaceHolder"
import TabsPlaceHolder from "@/components/Tabs/TabsPlaceHolder"

// lazy UI
const PosterImage = dynamic(() => import("@/components/PosterImage"), {
  loading: () => <PosterImagePlaceHolder />,
})
const Tabs = dynamic(() => import("@/components/Tabs"), {
  loading: () => <TabsPlaceHolder />,
})

function MovieDetails({ movie, similarMovies, trailer, actors }) {
  return (
    <>
      <Head>
        <title>{movie.original_title}</title>
        <meta name="description" content={movie.overview} />
      </Head>
      <main className="p-4 grid xl:grid-cols-9 xl:p-20 md:p-8 grid-cols-1 sm:grid-col-1 gap-24 md:grid-cols-2 md:mt-16">
        <PosterImage URL={movie?.poster_path} />
        <div className="xl:col-span-5">
          {/* Tabs */}
          <Tabs
            movie={movie}
            similarMovies={similarMovies}
            trailer={trailer}
            actors={actors}
          />
        </div>
      </main>
    </>
  )
}

export default MovieDetails

export async function getServerSideProps(context) {
  const { movieId } = context.query
  const movie = await getMovieById(movieId)
  const similarMovies = await getSimilarMovies(movieId)
  const trailer = await getMovieTrailer(movieId)
  const actors = await getMovieActors(movieId)
  return {
    props: {
      movie,
      similarMovies,
      trailer,
      actors,
    },
  }
}
