import PageCover from "@/components/PageCover"
import SearchBar from "@/components/SearchBar"
import { getActors } from "@/util/API"
import dynamic from "next/dynamic"
import Link from "next/link"

function ActorsPage({ actors }) {
  return (
    <>
      {actors.map((actor) => (
        <Link
          className="text-xl block mt-4 dark:text-white "
          key={actor.id}
          href={"/actors/" + actor.id}
        >
          {actor.name}
        </Link>
      ))}
    </>
  )
}

export default ActorsPage

export async function getServerSideProps() {
  const actors = await getActors()
  return {
    props: {
      actors,
    },
  }
}
