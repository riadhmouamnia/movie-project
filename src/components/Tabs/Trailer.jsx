import YouTube from "react-youtube"

function Trailer({ trailer }) {
  const tarilerKey = trailer?.results[0]?.key

  const opts = {
    minHeight: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <div className="h-full w-full flex item-center justify-center">
      {tarilerKey ? (
        <YouTube
          videoId={tarilerKey}
          opts={opts}
          className="w-full h-full flex-grow m-4 py-8"
        />
      ) : (
        <h4 className="dark:text-white text-3xl text-center">
          No video trailer from this movie in this API 😞, go search for it
          Manually!!
        </h4>
      )}
    </div>
  )
}

export default Trailer
