import {
  IMAGE_BASE_URL_ORIGINAL,
  getShowById,
  getSimilarTVShows,
} from "@/util/API"
import Head from "next/head"
import Image from "next/image"
import { BsFillStarFill } from "react-icons/bs"

function ShowDetails({ show, similarShows }) {
  return (
    <>
      <Head>
        <title>{show.name}</title>
        <meta name="description" content={show.overview} />
      </Head>
      <main>
        <div className="h-[200px]"></div>
        <Image
          width={200}
          height={200}
          alt="tvshowimage"
          // className="w-[200px] h-[400px] object-cover"
          src={`${IMAGE_BASE_URL_ORIGINAL}${show?.poster_path}`}
        />
        <h1 className="dark:text-white text-4xl mb-4 font-bold flex justify-between">
          {show.name}
          <span className="flex items-center gap-2">
            {show.vote_average} <BsFillStarFill className="text-yellow-500" />
          </span>
        </h1>
        <div>
          {similarShows.map((show) => (
            <h1
              key={show.id}
              className="dark:text-white text-4xl mb-4 font-bold flex justify-between"
            >
              {show.name}
            </h1>
          ))}
        </div>
      </main>
    </>
  )
}

export default ShowDetails

export async function getServerSideProps(context) {
  const { showId } = context.query
  const show = await getShowById(showId)
  const similarShows = await getSimilarTVShows(showId)
  return {
    props: {
      show,
      similarShows,
    },
  }
}
