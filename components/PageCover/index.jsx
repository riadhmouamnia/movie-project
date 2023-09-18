import { IMAGE_BASE_URL_ORIGINAL } from "@/util/API"
import Image from "next/image"
import { useState } from "react"
import Button from "../Button"
import VideoModal from "../VideoModal"

function PageCover({ movie, trailer }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClose() {
    setIsOpen(false)
  }
  function handleOpen() {
    setIsOpen(true)
  }
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "..."
    } else {
      return str
    }
  }
  return (
    <>
      <div className="w-full h-[600px] dark:text-white relative">
        <VideoModal open={isOpen} onClose={handleClose} trailer={trailer} />
        <div className="w-full h-full">
          <div className="absolute w-full h-[600px] bg-gradient-to-r from-black opacity-70 z-10"></div>
          <div className="h-[600px] relative">
            <Image
              fill
              className="w-full h-full object-cover"
              src={`${IMAGE_BASE_URL_ORIGINAL}${movie?.backdrop_path}`}
              alt={movie?.title}
              priority
            />
          </div>
          <div className="absolute w-full top-[20%] p-4 md:p-8 z-20">
            <h1 className="text-3xl max-w-2xl md:text-6xl font-bold">
              {movie?.title}
            </h1>
            <div className="my-4 flex gap-4">
              <Button text="Play" primary onClick={handleOpen} />
              <Button text="Watch Later" secondary />
            </div>
            <p className="text-gray-400 text-sm">
              Released: {movie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] dark:text-gray-200">
              {truncateString(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageCover
