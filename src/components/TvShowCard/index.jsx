import Link from "next/link"
import { FaHeart, FaRegHeart } from "react-icons/fa"

import { IMAGE_BASE_URL_ORIGINAL } from "@/util/API"

const TvShowCard = ({ id, name, poster_path }) => {
  return (
    <Link className="text-decoration-none" href={"/tvshows/" + id}>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        {poster_path ? (
          <img
            className="w-full h-auto block"
            src={`${IMAGE_BASE_URL_ORIGINAL}${poster_path}`}
            alt={name}
          />
        ) : (
          <div className="w-full md:h-[7.9rem] xl:h-[9.3rem] h-[5.2rem] bg-gray-900" />
        )}

        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {name}
          </p>
          <p>
            {true ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default TvShowCard
