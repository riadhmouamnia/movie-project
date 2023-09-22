import { MdChevronLeft, MdChevronRight } from "react-icons/md"

import MovieCard from "../MovieCard"

function Row({ title, movies, rowID }) {
  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      {title && (
        <h2 className="dark:text-white font-bold text-2xl md:text-3xl md p-4">
          {title}
        </h2>
      )}
      <div className="relative flex items-center group">
        <div className="absolute w-[15%] h-full bg-gradient-to-r from-black to-transparent z-10" />
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar"
        >
          {movies.map((movie, id) => (
            <MovieCard key={id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
          size={40}
        />
        <div className="absolute right-0 w-[15%] h-full bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </>
  )
}

export default Row
