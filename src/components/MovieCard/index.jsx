import Image from "next/image"
import Link from "next/link"
import { FaHeart, FaRegHeart } from "react-icons/fa"

import { IMAGE_BASE_URL } from "@/util/API"

function MovieCard({ movie }) {
  return (
    <Link className="text-decoration-none" href={"/movies/" + movie.id}>
      <div className="inline-block cursor-pointer relative p-2">
        <div className="w-[240px] h-[140px] relative">
          {movie?.backdrop_path ? (
            <Image
              fill
              placeholder="blur"
              blurDataURL={`${IMAGE_BASE_URL}${movie?.backdrop_path}`}
              className="w-full h-full object-cover"
              src={`${IMAGE_BASE_URL}${movie?.backdrop_path}`}
              alt={movie?.title}
            />
          ) : (
            <div className="w-full h-full bg-gray-900" />
          )}
        </div>

        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {movie?.title}
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

export default MovieCard
