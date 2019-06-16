import { h } from 'preact'
import Link from '../Link'
import style from './navLink.scss'

const NavLink = ({ url, active, children }) => {
  const props = {
    class: [style.navLink, active ? style.active : ''].join(' '),
  }

  return (
    <li {...props}>
      <Link url={url}>{children}</Link>
    </li>
  )
}

export default NavLink
