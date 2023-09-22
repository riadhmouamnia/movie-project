import Head from "next/head"
import dynamic from "next/dynamic"

// utils
import { getMoviesByActorId, getSingleActor } from "@/util/API"

// components imports
import ActorCardDetailsPlaceHolder from "@/components/ActorCardDetails/ActorCardDetailsPlaceHolder"
import PosterImagePlaceHolder from "@/components/PosterImage/PosterImagePlaceHolder"

// lazy UI
const PosterImage = dynamic(() => import("@/components/PosterImage"), {
  loading: () => <PosterImagePlaceHolder />,
})
const ActorCardDetails = dynamic(
  () => import("@/components/ActorCardDetails"),
  {
    loading: () => <ActorCardDetailsPlaceHolder />,
  },
)

function ActorDetails({ actor, movies }) {
  return (
    <>
      <Head>
        <title>{actor.name}</title>
        <meta name="description" content={actor.biography} />
      </Head>
      <div className="h-[70px] lg:h-[100px] md:h-[150px]"></div>
      <main className="p-4 grid xl:grid-cols-9 xl:p-20 md:p-8 grid-cols-1 sm:grid-col-1 gap-24 md:grid-cols-2 md:mt-16">
        <PosterImage URL={actor.profile_path} />
        <ActorCardDetails actor={actor} movies={movies} />
      </main>
    </>
  )
}

export default ActorDetails

export async function getServerSideProps(context) {
  const { actorId } = context.query
  const actor = await getSingleActor(actorId)
  const movies = await getMoviesByActorId(actorId)
  return {
    props: {
      actor,
      movies,
    },
  }
}
