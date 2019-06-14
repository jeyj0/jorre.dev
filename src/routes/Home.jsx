import { h } from 'preact'
import ExternalLink from '../components/ExternalLink.jsx'
import style from './home.scss'

const Home = () => (
  <div class={style.home}>
    <header class={style.header}>
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
    </header>
    <main class={style.main} />
    <footer class={style.footer} />
  </div>
)

export default Home
