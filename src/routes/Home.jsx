import { h } from 'preact'
import ExternalLink from '../components/ExternalLink.jsx'
import style from './home.css'

const Home = () => (
  <main class={style.home}>
    <img class={style.image} src="../assets/jeyj0.png" alt="Avatar of me" />
    <h1>Jannis Jorre</h1>
    <h2>Software Developer</h2>
    <h3>Focused on Web (Frontend)</h3>
    <p>
      Studying at{' '}
      <ExternalLink url="https://code.berlin/en/">
        CODE University of Applied Sciences
      </ExternalLink>
    </p>
    <p>
      Employed at{' '}
      <ExternalLink url="https://www.arcusx.com/">arcus[x]</ExternalLink>
    </p>
  </main>
)

export default Home
