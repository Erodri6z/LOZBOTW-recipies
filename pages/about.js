import Nav from '../components/navbar'
import Layout from '../components/layout'


export default function About() {
  return (
    <selection>
        <h1>
          About
        </h1>
        <p>basically this entire app is a sandbox to help me understand next.js and sass</p>
    </selection>
  )
}

About.getLayout = function getLayout(page) {
  return(
    <Layout>
      <Nav />
      {page}
    </Layout>
  )
}