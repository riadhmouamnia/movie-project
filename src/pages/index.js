import Head from "next/head"

// MUI imports
import Typography from "@mui/material/Typography"

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
        <Typography variant="h1">Popcorn Palace</Typography>
        <Typography variant="h4">Home page</Typography>
      </main>
    </>
  )
}
