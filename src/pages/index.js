import dynamic from "next/dynamic"
import Head from "next/head"

// utils
import {
  getHomePageMovies,
  getMovieTrailer,
  getRandomMovie,
  requests,
} from "@/util/API"

// component imports
import RowPlaceHolder from "@/components/Row/RowPlaceHolder"
import PageCoverPlaceHolder from "@/components/PageCover/PageCoverPlaceHolder"

// lazy UI
const PageCover = dynamic(() => import("@/components/PageCover"), {
  loading: () => <PageCoverPlaceHolder />,
})
const Row = dynamic(() => import("@/components/Row"), {
  loading: () => <RowPlaceHolder />,
})

export default function Home({
  trendingMovies,
  upcomingMovies,
  horrorMovies,
  popularMovies,
  randomMovie,
  animeMovies,
  coverTrailer,
}) {
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
  const promises = [
    getHomePageMovies(requests.requestTrending),
    getHomePageMovies(requests.requestUpcoming),
    getHomePageMovies(requests.requestHorror),
    getHomePageMovies(requests.requestPopular),
    getHomePageMovies(requests.requestTopRated),
    getHomePageMovies(requests.requestAnimation),
  ]

  // Wait for all of the promises to resolve
  // to avoid a waterfall approach and fetch data in parallel
  const [
    trendingMovies,
    upcomingMovies,
    horrorMovies,
    popularMovies,
    topRatedMovies,
    animeMovies,
  ] = await Promise.all(promises)
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
    revalidate: 10,
  }
}
