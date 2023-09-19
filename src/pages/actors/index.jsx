import Head from "next/head"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import { useRef } from "react"

// utils
import { fetchActors } from "@/util/API"

// components import
import ActorCardPlaceHolder from "@/components/ActorCard/ActorCardPlaceHolder"
import SearchBar from "@/components/SearchBar"
import PageCoverPlaceHolder from "@/components/PageCover/PageCoverPlaceHolder"
import PaginationPlaceHolder from "@/components/PaginationBar/PaginationPlaceHolder"

// lazy UI
const ActorCard = dynamic(() => import("@/components/ActorCard"), {
  loading: () => <ActorCardPlaceHolder />,
})
const SimpleCover = dynamic(() => import("@/components/SimpleCover"), {
  loading: () => <PageCoverPlaceHolder />,
})
const PaginationBar = dynamic(() => import("@/components/PaginationBar"), {
  loading: () => <PaginationPlaceHolder />,
})

const ActorsPage = ({ page, actors, search, limit, name }) => {
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
        <title>{name}</title>
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
      <main className="mx-auto text-center min-h-[80vh]">
        <PaginationBar
          limit={limit}
          page={page}
          pathname="/actors"
          queryParams={queryParams}
          title={name}
        />
        <div className="my-8">
          {actors.map((actor) => (
            <ActorCard key={actor.id} {...actor} />
          ))}
        </div>
        <PaginationBar
          limit={limit}
          page={page}
          pathname="/actors"
          queryParams={queryParams}
          title={name}
        />
      </main>
    </>
  )
}

export default ActorsPage

export async function getServerSideProps({ query }) {
  const page = query.page ? Number(query.page) : 1
  const search = query.search ? query.search : ""
  const name = query.search ? query.search : "Actors"
  const data = await fetchActors(search, page)
  const limit = data.total_pages > 20 ? 20 : data.total_pages
  const actors = await data.results
  return {
    props: {
      actors,
      page,
      search,
      limit,
      name,
    },
  }
}
