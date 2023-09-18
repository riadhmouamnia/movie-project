import MovieCardPlaceHolder from "../MovieCard/MovieCardPlaceHolder"

function RowPlaceHolder() {
  return (
    <>
      <h2 className="bg-gray-600 animate-pulse p-2 w-[200px] rounded-md ml-2 my-4"></h2>
      <div className="relative flex items-center group">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative">
          <MovieCardPlaceHolder />
          <MovieCardPlaceHolder />
          <MovieCardPlaceHolder />
          <MovieCardPlaceHolder />
          <MovieCardPlaceHolder />
          <MovieCardPlaceHolder />
          <MovieCardPlaceHolder />
        </div>
      </div>
    </>
  )
}

export default RowPlaceHolder
