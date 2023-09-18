import Link from "next/link"
import { BsGithub, BsLinkedin } from "react-icons/bs"

import { about, teamMembers } from "@/util/constants"

function Footer() {
  return (
    <footer className=" border-t-slate-800 border-t-2">
      <div className=" w-full mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex sm:items-center md:justify-between">
          <div className="mb-6 md:mb-0 w-full md:flex-1 mr-20">
            <Link href="/">
              <h3 className="self-center text-2xl whitespace-nowrap text-red-700 font-black">
                Popcorn Palace
              </h3>
            </Link>
          </div>
          <div className="flex justify-end gap-8 w-full mx-auto md:flex-3">
            <div className="flex md:justify-end">
              <div className="w-3/4">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Made By
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-wrap mt-4 sm:mt-0">
                  {teamMembers.map((teamMember, id) => (
                    <li
                      key={id}
                      className="mb-4 space-x-2 flex items-center"
                      style={{ marginRight: "1rem" }}
                    >
                      <a href="#" className="hover:underline">
                        {teamMember.name}
                      </a>
                      <div className="flex mt-4 space-x-2 sm:justify-center sm:mt-0">
                        <a
                          href={teamMember.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <BsGithub />
                          <span className="sr-only">GitHub account</span>
                        </a>
                        <a
                          href={teamMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <BsLinkedin />
                          <span className="sr-only">LinkedIn account</span>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                About
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {about.map((item) => (
                  <li key={item.id} className="mb-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              PopcornPalace™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
