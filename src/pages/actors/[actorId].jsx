import Row from "@/components/Row"
import {
  IMAGE_BASE_URL_ORIGINAL,
  getMoviesByActorId,
  getSingleActor,
} from "@/util/API"
import Image from "next/image"
import { BsFillStarFill } from "react-icons/bs"

function ActorDetails({ actor, movies }) {
  console.log(movies)
  console.log(actor)
  return (
    <>
      <div className="h-[70px] lg:h-[100px] md:h-[150px]"></div>
      <main className="grid gap-8 md:grid-cols-6 xl:px-20 p-8">
        <div className="w-[200px] md:w-full h-[200px] md:h-[620px] mx-auto md:min-h-[600px] xl:min-h-[660px] md:col-span-2 relative">
          <div className="absolute w-full h-[20%] bg-gradient-to-b from-black opacity-60 to-transparent z-10"></div>
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-full md:rounded-none object-cover border-red-600 border-4 md:border-none"
            src={`${IMAGE_BASE_URL_ORIGINAL}${actor.profile_path}`}
            alt="cover image"
            priority
          />
          <div className="absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-black opacity-60 to-transparent z-10"></div>
        </div>
        <div className="lg:cols-span-5 md:col-span-4 ">
          <h1 className="dark:text-white text-white text-4xl font-bold border-b-4 pb-2 border-red-600">
            <span className="flex justify-between items-center">
              {actor.name}
              <span className="text-xl flex items-center justify-center gap-2">
                {actor.popularity}
                <BsFillStarFill className="text-yellow-500" />
              </span>
            </span>
            <span className="text-gray-500 block font-normal text-sm mt-2">
              {actor.gender === 2 ? "MALE" : "FEMALE"}
            </span>
          </h1>
          {actor.also_known_as && (
            <p className="dark:text-white mt-6">
              <span className="dark:text-gray-500 font-medium pr-4">
                KNOWN AS:
              </span>
              {actor.also_known_as.map((name, i) => (
                <span key={i}>
                  {name}
                  {i < actor.also_known_as.length - 1 ? (
                    <span className="px-2">|</span>
                  ) : (
                    ""
                  )}
                </span>
              ))}
            </p>
          )}
          <p className="dark:text-white mt-2">
            <span className="dark:text-gray-500 font-medium pr-1">ABOUT:</span>
            <span>{actor.biography}</span>
          </p>
          <p className="dark:text-white mt-2">
            <span className="dark:text-gray-500 font-medium pr-1">
              BIRTHDAY:
            </span>
            <span>{actor.birthday}</span>
          </p>
          <p className="dark:text-white mt-2">
            <span className="dark:text-gray-500 font-medium pr-1">
              DEATHDAY:
            </span>
            <span>
              {actor.deathday ? actor.deathday : "🙏🏽 عن قريــب انشاء الله"}
            </span>
          </p>
          <p className="dark:text-white mt-2">
            <span className="dark:text-gray-500 font-medium pr-1">
              PLACE OF BIRTH:
            </span>
            <span>{actor.place_of_birth}</span>
          </p>
          <div className="grid grid-cols-1 place-content-center mt-10">
            <Row rowID="1" title="Movies:" movies={movies} />
          </div>
        </div>
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
