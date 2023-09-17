import { getMoviesByActorId, getSingleActor } from "@/util/API"

function ActorDetails({ actor, movies }) {
  console.log(movies)
  console.log(actor)
  return (
    <div>
      <h1 className=" dark:text-white text-white text-4xl">{actor.name}</h1>
    </div>
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
