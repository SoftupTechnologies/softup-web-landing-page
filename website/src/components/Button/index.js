import React from "react"
import "./button.scss"
import PropTypes from "prop-types"

export const Button = ({ onClick, value, link }) => {
  return (
    <form>
      <button onClick={onClick} formAction={link}>
        {value}
      </button>
    </form>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  link: PropTypes.string,
}
