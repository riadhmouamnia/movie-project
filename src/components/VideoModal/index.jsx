import { useState } from "react"
import YouTube from "react-youtube"
import { AiOutlineCloseCircle } from "react-icons/ai"

function VideoModal({ open, onClose, trailer }) {
  const [player, setPlayer] = useState(null)

  const handlePause = () => {
    if (player) {
      player.pauseVideo() // Pause the video
    }
  }

  const onPlayerReady = (event) => {
    setPlayer(event.target) // Store the player instance
  }
  const tarilerKey = trailer?.results[0]?.key
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // You can specify player parameters here (e.g., autoplay, loop)
      autoplay: 0,
    },
  }
  return (
    <>
      <div
        id="popup-modal"
        tabIndex="-1"
        className={`${
          open ? "" : "hidden"
        } fixed top-0 right-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh] w-[100vw] bg-black bg-opacity-75`}
      >
        <div
          className="relative w-full h-full flex justify-center p-10"
          onClick={() => {
            onClose()
            handlePause()
          }}
        >
          <div className="relative  rounded-lg shadow  min-h-[75vh] min-w-[75vw]">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-4xl opacity-60 hover:opacity-100"
              data-modal-hide="popup-modal"
              onClick={onClose}
            >
              <AiOutlineCloseCircle />
            </button>
            <div className="p-6 text-center w-full h-full flex items-center justify-center">
              {trailer && (
                <YouTube
                  videoId={tarilerKey}
                  opts={opts}
                  onReady={onPlayerReady}
                  className="w-full h-full flex-grow m-4 py-8"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoModal
