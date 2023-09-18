import { getPopularTVShows } from "@/util/API"
import Link from "next/link"

export default function TvShowsPage({ tvShows }) {
  return (
    <main>
      {tvShows.map((show) => {
        return (
          <Link
            href={`/tvshows/${show.id}`}
            key={show.id}
            className="text-white text-3xl"
          >
            {show.name}
          </Link>
        )
      })}
    </main>
  )
}

export async function getStaticProps() {
  const data = await getPopularTVShows(1)
  const tvShows = data.results

  return {
    props: {
      tvShows,
    },
  }
}
