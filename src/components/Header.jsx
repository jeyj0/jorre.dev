import { h } from 'preact'
import ExternalLink from './ExternalLink'
import NavLink from './header/NavLink'
import style from './header.scss'

const pages = [
  {
    url: '/',
    text: 'Articles',
  },
  {
    url: '/cheatsheets',
    text: 'CheatSheets',
  },
]

const Header = ({ class: className, currentUrl }) => (
  <header class={[className, style.header].join(' ')}>
    <img class={style.image} src="../assets/jeyj0.png" alt="Avatar of me" />
    <span class={style.headline}>Jannis Jorre</span>
    <ul class={style.links}>
      <li>
        <ExternalLink url="https://github.com/jeyj0">Github</ExternalLink>
      </li>
      <li>
        <ExternalLink url="https://twitter.com/jeyj0_plus">
          Twitter
        </ExternalLink>
      </li>
    </ul>
    <nav class={style.navbar}>
      <ul class={style.links}>
        {pages.map(page => (
          <NavLink url={page.url} active={page.url == currentUrl}>
            {page.text}
          </NavLink>
        ))}
      </ul>
    </nav>
  </header>
)

export default Header
