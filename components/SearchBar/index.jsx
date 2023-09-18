import { CiSearch } from "react-icons/ci"

import Button from "../Button"

function SearchBar({
  searchRef,
  handleSubmit,
  btnIcon,
  btnText,
  size,
  ...rest
}) {
  const sizes = {
    sm: "text-base p-1 ",
    md: "text-md p-2 ",
    lg: "text-xl p-4 ",
  }
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
          className={`${
            size ? sizes[size] : ""
          } block w-full rounded-md pl-10 font-light text-gray-900 border border-slate-600  bg-gray-50 dark:bg-black dark:bg-opacity-20  dark:placeholder-gray-500 dark:text-white dark:focus:bg-white dark:focus:bg-opacity-20`}
          required
        />
        <Button text={btnText} primary icon={btnIcon} />
      </div>
    </form>
  )
}

export default SearchBar
