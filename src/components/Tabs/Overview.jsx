import Row from "../Row"

function Overview({ movie, similar }) {
  return (
    <div className="py-8 ">
      <h4 className="dark:text-white text-2xl mb-4">{movie.tagline}</h4>
      <p className="mb-8 dark: font-light text-lg text-gray-300">
        {movie.overview}
      </p>
      <p className="flex items-center gap-2 py-1">
        <span className="text-gray-400">Language</span>
        {movie.spoken_languages.map((lang, index) => (
          <span
            key={lang.english_name}
            className="text-sm dark:text-white flex gap-4 items-center"
          >
            {lang.english_name}
            {index < movie.spoken_languages - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <p className="flex items-center gap-2 py-1">
        <span className="text-gray-400">Genres</span>
        {movie.genres.map((genre, index) => (
          <span
            key={genre.id}
            className="text-sm dark:text-white flex gap-4 items-center"
          >
            {genre.name}
            {index < movie.genres.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <h5 className="my-8 text-3xl font-semibold dark:text-white">
        {similar ? "Related movies:" : "No similar movies found"}
      </h5>
      <div>{similar && <Row rowID="1" movies={similar} />}</div>
    </div>
  )
}

export default Overview
