import React from "react"

function Button({ text, primary, secondary, ...rest }) {
  const btnPrimary =
    "bg-red-700 border border-red-700 text-white hover:bg-red-800 hover:border-red-800"
  const btnSecondary =
    "text-white border border-gray-300 hover:bg-gray-400 hover:border-gray-400 hover:text-black"

  return (
    <button
      {...rest}
      className={`${primary ? btnPrimary : ""} ${
        secondary ? btnSecondary : ""
      } border  py-2 px-5`}
    >
      {text}
    </button>
  )
}

export default Button
