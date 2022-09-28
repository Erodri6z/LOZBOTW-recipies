import Link from 'next/link'

import styles from './navbar.module.scss'

export default function Nav () {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.link}>
        <a>Home</a>
      </Link>
      <Link href="/about" className={styles.link}>
        <a >About</a>
      </Link>
      <Link href="/recipes" className={styles.link}>
        <a>Recipes</a>
      </Link>
    </nav>
  )
}