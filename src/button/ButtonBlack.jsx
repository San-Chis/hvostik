import React from 'react'

const ButtonBlack = ({ onClick, children }) => {
  return (
    <button className="btnblack" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonBlack


