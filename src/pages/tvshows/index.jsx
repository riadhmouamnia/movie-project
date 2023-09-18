import { useRouter } from "next/navigation"
import { useRef } from "react"

import { getTVShows } from "@/util/API"
import TvShowCard from "@/components/TvShowCard"
import SearchBar from "@/components/SearchBar"
import SimpleCover from "@/components/SimpleCover"
import PaginationBar from "@/components/PaginationBar"

function TvShowsPage({ tvShows, page, search, limit }) {
  const searchRef = useRef()
  const router = useRouter()
  const queryParams = { search }

  function handleSearch(e) {
    e.preventDefault()
    const search = searchRef.current.value
    router.push({
      pathname: "/tvshows",
      query: { search, page: 1 },
    })
    searchRef.current.value = ""
  }

  return (
    <main>
      <SimpleCover
        title=" Watch the Latest and Greatest TV Series Online"
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
      <main className="mx-auto text-center">
        <div className="flex mx-auto max-w-6xl border-b-4 pb-3 border-red-600 items-center justify-between">
          <h2 className="dark:text-white text-3xl">TV Shows</h2>
          <PaginationBar
            limit={limit}
            page={page}
            pathname="/tvshows"
            queryParams={queryParams}
          />
        </div>
        <div className="my-8">
          {tvShows.map((show) => (
            <TvShowCard key={show.id} {...show} />
          ))}
        </div>
        <div className="flex mx-auto max-w-6xl border-t-4 pt-3 mb-20 border-red-600 items-center justify-between">
          <h2 className="dark:text-white text-3xl">TV Shows</h2>
          <PaginationBar
            limit={limit}
            page={page}
            pathname="/tvshows"
            queryParams={queryParams}
          />
        </div>
      </main>
    </main>
  )
}

export default TvShowsPage

export async function getServerSideProps({ query }) {
  const page = query.page ? Number(query.page) : 1
  const search = query.search ? query.search : ""
  const data = await getTVShows(search, page)
  const limit = data.total_pages > 20 ? 20 : data.total_pages
  const tvShows = data.results

  return {
    props: {
      tvShows,
      page,
      limit,
    },
  }
}
