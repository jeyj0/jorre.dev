import { h } from 'preact'
import Helmet from 'react-helmet'
import Header from './Header'
import style from './page.scss'

const Page = ({ children, currentUrl }) => (
  <div class={style.page}>
    <Helmet>
      <meta name="Description" content="#TIL | Blog | Jannis Jorre" />
      <link
        rel="apple-touch-icon"
        href="/assets/icons/apple-touch-icon.png"
        sizes="192x192"
      />
    </Helmet>

    <Header class={style.header} currentUrl={currentUrl} />
    <main class={style.main}>{children}</main>
    <footer class={style.footer} />
  </div>
)

export default Page
