import Link from "next/link"
import { FaHeart, FaRegHeart } from "react-icons/fa"

function MovieCard({ movie }) {
  return (
    <Link className="text-decoration-none" href={"/movies/" + movie.id}>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        {movie?.backdrop_path ? (
          <img
            className="w-full h-auto block"
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        ) : (
          <div className="w-full h-[148px] bg-gray-900" />
        )}

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
