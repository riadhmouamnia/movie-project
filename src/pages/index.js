import PageCover from "@/components/PageCover"
import Row from "@/components/Row"

import {
  getAnime,
  getHorrorMovies,
  getMovieTrailer,
  getPopularMovies,
  getRandomMovie,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "@/util/API"
import Head from "next/head"

export default function Home({
  trendingMovies,
  upcomingMovies,
  horrorMovies,
  popularMovies,
  randomMovie,
  animeMovies,
  coverTrailer,
}) {
  console.log(horrorMovies)
  return (
    <>
      <Head>
        <title>Popcorn Palace</title>
        <meta name="description" content="Created by Popcorn Palace team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageCover movie={randomMovie} trailer={coverTrailer} />
        <div className="my-10">
          <Row rowID="1" title="Trending" movies={trendingMovies} />
          <Row rowID="2" title="Upcoming" movies={upcomingMovies} />
          <Row rowID="3" title="Horror" movies={horrorMovies} />
          <Row rowID="4" title="Popular" movies={popularMovies} />
          <Row rowID="5" title="Top Rated" movies={trendingMovies} />
          <Row rowID="6" title="Anime" movies={animeMovies} />
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const trendingMovies = await getTrendingMovies()
  const upcomingMovies = await getUpcomingMovies()
  const horrorMovies = await getHorrorMovies()
  const popularMovies = await getPopularMovies()
  const topRatedMovies = await getTopRatedMovies()
  const animeMovies = await getAnime()
  const randomMovie = await getRandomMovie()
  const coverTrailer = await getMovieTrailer(randomMovie.id)

  return {
    props: {
      trendingMovies,
      upcomingMovies,
      horrorMovies,
      popularMovies,
      topRatedMovies,
      animeMovies,
      randomMovie,
      coverTrailer,
    },
  }
}
