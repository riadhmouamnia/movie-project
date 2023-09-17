import Button from "../Button"
import { CiSearch } from "react-icons/ci"

function SearchBar({ searchRef, handleSubmit, ...rest }) {
  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <CiSearch className="text-lg text-gray-500 dark:text-gray-500" />

        <span className="sr-only">Search icon</span>
      </div>
      <div className="flex gap-2">
        <input
          ref={searchRef}
          {...rest}
          type="text"
          id="search-navbar"
          className="block w-full p-2 pl-10 text-md text-gray-900 border border-slate-600  bg-gray-50 dark:bg-black dark:bg-opacity-25  dark:placeholder-gray-500 dark:text-white"
          placeholder="Search..."
          required
        />
        <Button text="Search" primary />
      </div>
    </form>
  )
}

export default SearchBar
