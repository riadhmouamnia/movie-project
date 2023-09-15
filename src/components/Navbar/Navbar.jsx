import { useRef, useState } from "react"
import Link from "next/link"
import { CiSearch } from "react-icons/ci"
import { FiMenu } from "react-icons/fi"
import SearchBar from "../SearchBar"
import { useRouter } from "next/navigation"
import Dropdown from "./Dropdown"
import { moviesList } from "@/util/constants"
import NavItem from "./NavItem"

function Navbar({ genres }) {
  const [open, setOpen] = useState(false)
  const searchRef = useRef(null)
  const router = useRouter()
  function handleSubmit(e) {
    e.preventDefault()
    const searchText = searchRef.current.value
    console.log(searchText)
    router.push(`/movies/search?query=${searchText}`)
  }

  function handleToggoleMenu() {
    setOpen((prev) => !prev)
  }

  function handleCloseMenu() {
    if (open) {
      setOpen(false)
    } else {
      return
    }
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
          {/* Mobile Buttons */}
          <div className="flex md:order-2">
            <button
              onClick={handleToggoleMenu}
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
              onClick={handleToggoleMenu}
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
          {/* End of Mobile Buttons */}
          <div
            className={`items-center justify-between ${
              open ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <div className=" mt-3 md:hidden ">
              <SearchBar />
            </div>
            <ul className="flex md:items-center flex-col p-4 md:p-2 mt-4 font-medium border border-gray-10 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700">
              <NavItem text="Home" link="/" onClose={handleCloseMenu} />
              <NavItem text="Actors" link="/actors" onClose={handleCloseMenu} />
              <li>
                <Dropdown name="Movies" values={moviesList} />
              </li>
              <li>
                <Dropdown name="Genres" values={genres} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
