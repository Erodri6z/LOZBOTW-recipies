import Nav from '../components/navbar'
import Layout from '../components/layout'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <selection className={styles.container}>
        <h1 className={styles.title}>
          Legend Of Zelda Guide Recipes
        </h1>
    </selection>
  )
}

Home.getLayout = function getLayout(page) {
  return(
    <Layout>
      <Nav />
      {page}
    </Layout>
  )
}
