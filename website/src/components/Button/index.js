import React from "react"
import "./button.scss"
import PropTypes from "prop-types"

export const Button = ({ data }) => {
  return (
    <form>
      <div className={"buttonDiv"}>
        <a href={data.link}>
          {data.value}
        </a>
      </div>
    </form>
  )
}

Button.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string,
    link: PropTypes.string,
  }),
}
