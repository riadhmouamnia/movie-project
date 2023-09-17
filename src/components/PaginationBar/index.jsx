import React from "react"
import {
  MdFirstPage,
  MdLastPage,
  MdNavigateBefore,
  MdNavigateNext,
} from "react-icons/md"

const PaginationBar = ({ currentPage, totalPages, onPageChange }) => {
  const handleFirstPageClick = () => {
    onPageChange(1)
  }

  console.log("current: ", currentPage)

  const handleLastPageClick = () => {
    onPageChange(totalPages)
  }

  const handlePageNextClick = () => {
    if (currentPage === totalPages) return
    onPageChange((prev) => prev + 1)
  }
  const handlePagePreviousClick = () => {
    if (currentPage === 1) return
    onPageChange((prev) => prev - 1)
  }

  return (
    <div className="flex gap-2 my-8 justify-center">
      <button
        onClick={handleFirstPageClick}
        disabled={currentPage === 1}
        className={`${
          currentPage === 1 ? "bg-gray-400" : "bg-gray-200 hover:bg-red-600  "
        } p-2 rounded-full`}
      >
        <MdFirstPage
          className={`${
            currentPage === 1 ? "text-grey-500" : "hover:text-white"
          } text-black text-2xl`}
        />
      </button>
      <button
        onClick={handlePagePreviousClick}
        disabled={currentPage === 1}
        className={`${
          currentPage === 1 ? "bg-gray-400" : "bg-gray-200 hover:bg-red-600  "
        } p-2 rounded-full`}
      >
        <MdNavigateBefore
          className={`${
            currentPage === 1 ? "text-grey-500" : "hover:text-white"
          } text-black text-2xl`}
        />
      </button>
      <button className=" p-2 w-[40px] h-[40px] flex items-center justify-center border-4 border-red-600  rounded-full">
        <span className="text-red-600 font-bold">{currentPage}</span>
      </button>
      <button
        onClick={handlePageNextClick}
        disabled={currentPage === totalPages}
        className={`${
          currentPage === totalPages
            ? "bg-gray-400"
            : "bg-gray-200 hover:bg-red-600  "
        } p-2 rounded-full`}
      >
        <MdNavigateNext
          className={`${
            currentPage === totalPages ? "text-grey-500" : "hover:text-white"
          } text-black text-2xl`}
        />
      </button>
      <button
        onClick={handleLastPageClick}
        disabled={currentPage === totalPages}
        className={`${
          currentPage === totalPages
            ? "bg-gray-400"
            : "bg-gray-200 hover:bg-red-600  "
        } p-2 rounded-full`}
      >
        <MdLastPage
          className={`${
            currentPage === totalPages ? "text-grey-500" : "hover:text-white"
          } text-black text-2xl`}
        />
      </button>
    </div>
  )
}

export default PaginationBar
