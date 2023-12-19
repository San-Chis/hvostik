import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const ForceNavLink = ({ to, children, className }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [to])

  const handleClick = (e) => {
    if (window.location.pathname === to) {
      e.preventDefault()
      window.location.reload()
    }
  }

  return (
    <NavLink className={className} to={to} onClick={handleClick} end>
      {children}
    </NavLink>
  )
}

export default ForceNavLink
