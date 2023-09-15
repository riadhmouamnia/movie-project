import Link from "next/link"

const NavItem = ({ text, onClose, link }) => {
  return (
    <li>
      <Link
        onClick={onClose}
        href={link}
        className="block py-2 pl-3 pr-4 dark:text-gray-400 hover:dark:text-white md:p-0 "
        aria-current="page"
      >
        {text}
      </Link>
    </li>
  )
}

export default NavItem
