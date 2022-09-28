import Link from 'next/link'

import styles from '../styles/Home.module.sass'

export default function Nav () {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a >About</a>
      </Link>
      <Link href="/recipes">
        <a>Recipes</a>
      </Link>
    </nav>
  )
}