import MovieCard from "../MovieCard"
import PaginationBar from "../PaginationBar"

const MoviesCardGrid = ({
  title,
  movies,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="grid justify-center">
      <h2 className="text-4xl font-black text-center dark:text-white mt-20">
        {title}
      </h2>
      <div className="flex gap-2 flex-wrap w-full justify-center my-20">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  )
}

export default MoviesCardGrid
