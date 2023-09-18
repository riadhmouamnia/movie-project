import React from "react"
import MovieCardPlaceHolder from "../MovieCard/MovieCardPlaceHolder"

function MoviesCardGridPlaceHolder() {
  return (
    <>
      <div className="w-full flex mt-20 justify-center">
        <h2 className="bg-gray-600 animate-pulse p-4 w-[260px] rounded-md"></h2>
      </div>
      <div className="flex gap-2 flex-wrap w-full justify-center my-20">
        {[...Array(20)].map((e, i) => (
          <MovieCardPlaceHolder key={i} />
        ))}
      </div>
    </>
  )
}

export default MoviesCardGridPlaceHolder
