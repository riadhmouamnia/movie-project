import Head from "next/head"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useRef } from "react"

// utils
import { getTVShows } from "@/util/API"

// component imports
import SearchBar from "@/components/SearchBar"
import PaginationPlaceHolder from "@/components/PaginationBar/PaginationPlaceHolder"
import PageCoverPlaceHolder from "@/components/PageCover/PageCoverPlaceHolder"
import TvShowCardPlaceHolder from "@/components/TvShowCard/TvShowCardPlaceHolder"

// lazy UI
const SimpleCover = dynamic(() => import("@/components/SimpleCover"), {
  loading: () => <PageCoverPlaceHolder />,
})
const PaginationBar = dynamic(() => import("@/components/PaginationBar"), {
  loading: () => <PaginationPlaceHolder />,
})
const TvShowCard = dynamic(() => import("@/components/TvShowCard"), {
  loading: () => <TvShowCardPlaceHolder />,
})

function TvShowsPage({ tvShows, page, search, limit, name }) {
  const searchRef = useRef()
  const router = useRouter()
  const queryParams = { ...(search ? { search } : {}) }

  function handleSearch(e) {
    e.preventDefault()
    const search = searchRef.current.value

    router.push({
      pathname: "/tvshows",
      query: { search },
    })
    searchRef.current.value = ""
  }

  return (
    <>
      <Head>
        <title>TV Shows</title>
        <meta
          name="description"
          content="Watch the Latest and Greatest TV Series Online"
        />
      </Head>
      <main className="mx-auto text-center">
        <SimpleCover
          title="Watch the Latest and Greatest TV Series Online"
          subTitle="Stream your favorite TV shows, free and without ads."
          imageUrl="https://www.economiadigital.es/wp-content/uploads/2021/03/Netflix.jpg"
          searchBar={
            <SearchBar
              placeholder="Search for TV Show"
              searchRef={searchRef}
              handleSubmit={handleSearch}
              size="lg"
              btnText="Search"
            />
          }
        />
        <PaginationBar
          pathname="/tvshows"
          limit={limit}
          page={page}
          title={name}
          queryParams={queryParams}
        />
        <div className="my-8 min-h-[80vh]">
          {!tvShows.length && (
            <h1 className="dark:text-white text-4xl">
              No TV SHOW Found that matches: {name}
            </h1>
          )}
          {tvShows.map((show) => (
            <TvShowCard key={show.id} {...show} />
          ))}
        </div>
      </main>
    </>
  )
}

export default TvShowsPage

export async function getServerSideProps({ query }) {
  const page = query.page ? Number(query.page) : 1
  const name = query.search ? query.search : "TV Shows"
  const search = query.search ? query.search : ""
  const data = await getTVShows(search, page)
  const limit = data?.total_pages > 20 ? 20 : data.total_pages
  const tvShows = data.results

  return {
    props: {
      tvShows,
      search,
      page,
      limit,
      name,
    },
  }
}
