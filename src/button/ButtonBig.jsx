import React from 'react'





const ButtonBig = ({ onClick, children }) => {
  return (
    <button className="btnbig" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonBig