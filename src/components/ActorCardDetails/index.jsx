import { BsFillStarFill } from "react-icons/bs"
import Row from "../Row"

const ActorCardDetails = ({ actor, movies }) => {
  return (
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
          <span className="dark:text-gray-500 font-medium pr-4">KNOWN AS:</span>
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
        <span className="dark:text-gray-500 font-medium pr-1">BIRTHDAY:</span>
        <span>{actor.birthday}</span>
      </p>
      <p className="dark:text-white mt-2">
        <span className="dark:text-gray-500 font-medium pr-1">DEATHDAY:</span>
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
  )
}

export default ActorCardDetails
