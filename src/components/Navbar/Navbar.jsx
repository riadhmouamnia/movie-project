import React, { useRef, useState } from "react"
import Link from "next/link"
import { CiSearch } from "react-icons/ci"
import { FiMenu } from "react-icons/fi"
import SearchBar from "../SearchBar"
import { useRouter } from "next/navigation"

function Navbar() {
  const [open, setOpen] = useState(false)
  const searchRef = useRef(null)
  const meviesListRef = useRef(null)
  const genreRef = useRef(null)
  const router = useRouter()
  function handleSubmit(e) {
    e.preventDefault()
    const searchText = searchRef.current.value
    console.log(searchText)
    router.push(`/movies/search?query=${searchText}`)
  }
  function handleSelectGenre() {
    const { value } = genreRef.current
    if (value === "Genres") return
    router.push(`/movies/genres/${value}`)
    console.log(value)
  }
  function handleSelectList() {
    const { value } = meviesListRef.current
    if (value === "Movies") return
    router.push(`/movies/movies-lists/${value}`)
    console.log(value)
  }
  function handleClose() {
    setOpen((prev) => !prev)
  }
  return (
    <>
      <nav className=" border-b-slate-800 border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <h3 className="self-center text-2xl whitespace-nowrap text-red-700 font-black">
              Popcorn Palace
            </h3>
          </Link>
          {/* ----------- */}
          <div className="flex md:order-2">
            <button
              onClick={handleClose}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-800 dark:text-white  p-2.5 mr-1"
            >
              <CiSearch className="w-5 h-5" />

              <span className="sr-only">Search</span>
            </button>
            <div className="hidden md:block">
              <SearchBar searchRef={searchRef} handleSubmit={handleSubmit} />
            </div>
            <button
              onClick={handleClose}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800  md:hidden  dark:text-white "
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <FiMenu className="w-5 h-5" />
            </button>
          </div>
          {/* --------------------------------MOBILE-------------------------------------------------------- */}
          <div
            className={`items-center justify-between ${
              open ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <div className=" mt-3 md:hidden ">
              <SearchBar />
            </div>
            <ul className="flex md:items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-10 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700">
              <li>
                <Link
                  onClick={handleClose}
                  href="/"
                  className="block py-2 pl-3 pr-4 dark:text-gray-400 hover:dark:text-white md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  href="/actors"
                  className="block py-2 pl-3 pr-4 dark:text-gray-400 hover:dark:text-white md:p-0 "
                  aria-current="page"
                >
                  Actors
                </Link>
              </li>
              <li>
                <select
                  onChange={handleSelectList}
                  ref={meviesListRef}
                  id="Movies"
                  className="border-gray-300 text-gray-900 p-2 outline-none dark:bg-slate-800  block w-full   dark:placeholder-gray-400 dark:text-gray-400 hover:dark:text-white"
                >
                  <option>Movies</option>
                  <option value="topRated">Top Rate</option>
                  <option value="popular">Popular</option>
                  <option value="latest">Latest</option>
                  <option value="nowPlaying">Now playing</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </li>
              <li>
                <select
                  onChange={handleSelectGenre}
                  ref={genreRef}
                  id="Genre"
                  className="border-gray-300 text-gray-900 p-2 outline-none dark:bg-slate-800  block w-full   dark:placeholder-gray-400 dark:text-gray-400 hover:dark:text-white"
                >
                  <option>Genres</option>
                  <option value="Action">Action</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Crime">Crime</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
