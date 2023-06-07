import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { PATHS } from '../../router/patchs'

const Header: FC = () => {
  return (
    <div>
      <NavLink to={PATHS.ACCOUNT}>ACCOUNT</NavLink>
      <NavLink to={PATHS.MAIN}>MAIN</NavLink>
      <NavLink to={PATHS.PAGE_404}>404</NavLink>
    </div>
  )
}

export default Header
