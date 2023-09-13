import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Popcorn Palace</title>
        <meta name="description" content="Created by Popcorn Palace team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Popcorn Palace</h1>
        <h2>Home page</h2>
      </main>
    </>
  )
}
