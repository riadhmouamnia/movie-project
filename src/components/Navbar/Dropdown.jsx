import { useState } from "react"
import { BiChevronUp, BiChevronDown } from "react-icons/bi"

const Dropdown = ({ name, values, onSelect }) => {
  const [open, setOpen] = useState(false)
  function toggleDropdown() {
    setOpen((prev) => !prev)
  }
  return (
    <div className="relative">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={toggleDropdown}
        className="flex items-center border-b-4 border-transparent dark:text-gray-400 hover:text-red-500 hover:border-red-500 hover:border-b-4 focus:outline-none md:p-0 py-2 pl-3 pr-4"
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
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`${
          open ? "" : "hidden"
        } w-80 py-4 dark:bg-slate-800 absolute scroll max-h-60 overflow-y-scroll no-scrollbar`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200 "
          aria-labelledby="dropdownDefaultButton"
        >
          {values.map((value) => (
            <li
              key={value.id}
              onClick={(e) => {
                onSelect(value.id, value.name, name)
                toggleDropdown()
              }}
              className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
