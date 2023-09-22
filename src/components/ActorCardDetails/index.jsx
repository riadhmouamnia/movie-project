import { BsFillStarFill } from "react-icons/bs"
import Row from "../Row"
import { useState } from "react"

const ActorCardDetails = ({ actor, movies }) => {
  const [textLen, setTextLen] = useState(400)

  const handleClikc = () => {
    if (textLen === actor?.biography.length) {
      setTextLen(400)
    } else {
      setTextLen(actor?.biography.length)
    }
  }

  const truncateString = (str) => {
    if (str?.length > textLen) {
      return str.slice(0, textLen) + "..."
    } else {
      return str
    }
  }
  return (
    <div className="xl:col-span-5">
      <h1 className="dark:text-white text-white text-4xl font-bold border-b-4 pb-2 border-red-600">
        <span className="flex justify-between items-center">
          {actor.name}
          <span className="text-3xl flex items-center justify-center gap-2">
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
        <span className="font-light text-lg dark:text-gray-300">
          {actor?.biography.length > 400 && (
            <>
              <span>{truncateString(actor?.biography)}</span>
              <span
                onClick={handleClikc}
                className="pl-3 text-gray-500 cursor-pointer dark:hover:text-white hover:text-black"
              >
                {actor?.biography.length > textLen ? "read more" : "hide"}
              </span>
            </>
          )}
        </span>
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
