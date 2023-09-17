import Link from "next/link"

const NavItem = ({ text, onClose, link }) => {
  return (
    <li>
      <Link
        onClick={onClose}
        href={link}
        className="block py-2 pl-3 pr-4 dark:text-gray-400 md:p-0 hover:text-red-500 hover:border-red-500 hover:border-b-4 border-b-4 border-transparent"
        aria-current="page"
      >
        {text}
      </Link>
    </li>
  )
}

export default NavItem
