import { useState } from "react"
import Overview from "./Overview"
import Trailer from "./Trailer"
import Actors from "./Actors"
import Companies from "./Companies"

function Tabs({ movie, similarMovies, trailer, actors }) {
  const [activeTab, setActiveTab] = useState(0)

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
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap ">
          {tabItems.map((tab, index) => (
            <li
              onClick={() => handleTabClick(index)}
              key={index}
              className={`${
                activeTab === index ? "active text-red-500 border-red-500" : ""
              } mr-2 p-4 border-b-4 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer`}
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
