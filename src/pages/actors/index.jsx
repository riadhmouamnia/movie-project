import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import { useRef } from "react"

import ActorCardPlaceHolder from "@/components/ActorCard/ActorCardPlaceHolder"
import SearchBar from "@/components/SearchBar"
import PageCoverPlaceHolder from "@/components/PageCover/PageCoverPlaceHolder"
import PaginationBar from "@/components/PaginationBar"

import { fetchActors } from "@/util/API"
import Head from "next/head"

// lazy UI
const ActorCard = dynamic(() => import("@/components/ActorCard"), {
  loading: () => <ActorCardPlaceHolder />,
})
const SimpleCover = dynamic(() => import("@/components/SimpleCover"), {
  loading: () => <PageCoverPlaceHolder />,
})

const ActorsPage = ({ page, actors, search, limit }) => {
  const searchRef = useRef()
  const router = useRouter()
  const queryParams = { search }

  function handleSearch(e) {
    e.preventDefault()
    const search = searchRef.current.value
    router.push({
      pathname: "/actors",
      query: { search, page: 1 },
    })
    searchRef.current.value = ""
  }
  return (
    <>
      <Head>
        <title>Popular Actors</title>
        <meta
          name="description"
          content="See the stars of your favorite movies and TV shows up close and personal."
        />
      </Head>
      <SimpleCover
        title="The actors who bring our favorite characters to life."
        subTitle="See the stars of your favorite movies and TV shows up close and personal."
        imageUrl="https://variety.com/wp-content/uploads/2022/03/one-piece.jpg?w=1000"
        searchBar={
          <SearchBar
            placeholder="Search for an actor"
            searchRef={searchRef}
            handleSubmit={handleSearch}
            size="lg"
            btnText="Search"
          />
        }
      />
      <main className="mx-auto text-center">
        <div className="flex mx-auto max-w-6xl border-b-4 pb-3 border-red-600 items-center justify-between">
          <h2 className="dark:text-white text-3xl">Actors</h2>
          <PaginationBar
            limit={limit}
            page={page}
            pathname="/actors"
            queryParams={queryParams}
          />
        </div>
        <div className="my-8">
          {actors.map((actor) => (
            <ActorCard key={actor.id} {...actor} />
          ))}
        </div>
        <div className="flex mx-auto max-w-6xl border-t-4 pt-3 mb-20 border-red-600 items-center justify-between">
          <h2 className="dark:text-white text-3xl">Actors</h2>
          <PaginationBar
            limit={limit}
            page={page}
            pathname="/actors"
            queryParams={queryParams}
          />
        </div>
      </main>
    </>
  )
}

export default ActorsPage

export async function getServerSideProps({ query }) {
  const page = query.page ? Number(query.page) : 1
  const search = query.search ? query.search : ""
  const data = await fetchActors(search, page)
  const limit = data.total_pages > 20 ? 20 : data.total_pages
  const actors = await data.results
  return {
    props: {
      actors,
      page,
      search,
      limit,
    },
  }
}
