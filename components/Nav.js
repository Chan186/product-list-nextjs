import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>getStaticProps</Link>
        </li>
        <li>
          <Link href='/Serversideprops'>getServerSideProps</Link>
        </li>
        <li>
          <Link href='/clientsidefetching'>ClientSideFetching</Link>
        </li>
        <li>
          <Link href='/ISR'>IncrementalStaticRegenaration</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
