import Head from 'next/head'


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Legend Of Zelda Recipies Guide</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}