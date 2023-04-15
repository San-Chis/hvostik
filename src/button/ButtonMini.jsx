import React from 'react'

const ButtonMini = ({ onClick, children }) => {
  return (
    <button className="btnmini" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonMini
