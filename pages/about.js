import Nav from '../components/navbar'
import Layout from '../components/layout'


export default function About() {
  return (
    <selection>
        <h1>
          Legend Of Zelda Guide About
        </h1>
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