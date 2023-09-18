import Image from "next/image"

function SimpleCover({ imageUrl, title, subTitle, searchBar }) {
  return (
    <div className="w-full h-[600px] text-white mb-4 ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-b after: from-black opacity-70 z-10"></div>
        <div className="h-[600px] relative">
          <Image
            fill
            className="w-full h-full object-cover"
            src={imageUrl}
            alt="cover image"
            priority
          />
          <div className="absolute w-full h-[600px] bg-gradient-to-t from-black opacity-70 z-10"></div>
        </div>
        <div className="absolute w-full flex flex-col items-center text-center top-[20%] p-4 md:p-8 z-20 my-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{title}</h1>
          <h2 className="md:text-3xl text-xl font-semibold">{subTitle}</h2>
          <div className="min-w-[80%] md:min-w-[50%] mt-8">
            {searchBar ? searchBar : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleCover
