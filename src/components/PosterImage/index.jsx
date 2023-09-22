import { IMAGE_BASE_URL_ORIGINAL } from "@/util/API"
import Image from "next/image"

function PosterImage({ URL }) {
  return (
    <div className="w-full h-[620px] md:min-h-[600px] xl:min-h-[660px] xl:col-span-4 relative">
      <div className="absolute w-full h-[20%] bg-gradient-to-b opacity-95 from-black to-transparent z-10"></div>
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className=" object-cover"
        src={`${IMAGE_BASE_URL_ORIGINAL}${URL}`}
        alt="cover image"
        priority
      />
      <div className="absolute bottom-0 w-full h-[20%] bg-gradient-to-t opacity-95 from-black to-transparent z-10"></div>
    </div>
  )
}

export default PosterImage
