import { useState } from "react"
import { BiChevronUp, BiChevronDown } from "react-icons/bi"

const Dropdown = ({ name, values }) => {
  const [open, setOpen] = useState(false)
  function toggleDropdown() {
    setOpen((prev) => !prev)
  }
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center dark:text-gray-400 hover:dark:text-white focus:outline-none md:p-0 py-2 pl-3 pr-4"
        type="button"
      >
        <span>{name}</span>
        <span>
          {open ? (
            <BiChevronUp className="text-2xl ml-2" />
          ) : (
            <BiChevronDown className="text-2xl ml-2" />
          )}
        </span>
      </button>
      <div
        className={`${
          open ? "" : "hidden"
        } z-10 bg-white divide-y divide-gray-100 shadow w-44 dark:bg-slate-800 absolute mt-1.5`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {values.map((value) => (
            <li
              key={value.id}
              onClick={() => {
                console.log(value.name)
                toggleDropdown()
              }}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {value.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
