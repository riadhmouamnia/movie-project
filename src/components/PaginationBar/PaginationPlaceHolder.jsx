function PaginationPlaceHolder() {
  return (
    <div className="flex mx-auto max-w-6xl items-center justify-between mt-5">
      <h2 className="h-[30px] w-[130px] bg-gray-600 animate-pulse rounded-md"></h2>
      <div className="flex gap-2">
        <div className="bg-gray-600 animate-pulse w-[60px] h-[30px] rounded-md"></div>
        <div className="bg-gray-600 animate-pulse w-[60px] h-[30px] rounded-md"></div>
      </div>
    </div>
  )
}

export default PaginationPlaceHolder
