import { useState } from "react"

import Overview from "./Overview"
import Trailer from "./Trailer"
import Actors from "./Actors"
import Companies from "./Companies"
import { BsFillStarFill } from "react-icons/bs"

function Tabs({ movie, similarMovies, trailer, actors }) {
  const [activeTab, setActiveTab] = useState(0)
  const [releseYear] = movie.release_date.split("-")
  const hours = Math.floor(movie.runtime / 60)
  const minutes = movie.runtime % 60
  const formattedRuntime = `${hours}h ${minutes}min`

  const tabItems = [
    {
      label: "OVERVIEW",
      content: <Overview movie={movie} similar={similarMovies} />,
    },
    { label: "TRAILER", content: <Trailer trailer={trailer} /> },
    { label: "ACTORS", content: <Actors actors={actors} /> },
    { label: "COMPANIES", content: <Companies movie={movie} /> },
  ]

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      <h1 className="dark:text-white xl:text-4xl text-3xl mb-4 font-bold flex justify-between">
        {movie.original_title}
        <span className="flex items-center gap-2">
          {movie.vote_average} <BsFillStarFill className="text-yellow-500" />
        </span>
      </h1>
      <p className="text-gray-400 text-sm flex items-center gap-2 mb-10">
        <span>{releseYear}</span>|<span>{formattedRuntime}</span>|
        <span>{movie.adult ? "18+" : "16+"}</span>
      </p>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap ">
          {tabItems.map((tab, index) => (
            <li
              onClick={() => handleTabClick(index)}
              key={index}
              className={`${
                activeTab === index
                  ? "active text-red-600 border-red-600 border-b-4 "
                  : "border-transparent"
              } w-1/4 py-4 border-b-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-center cursor-pointer`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      <div>{tabItems[activeTab].content}</div>
    </>
  )
}

export default Tabs
