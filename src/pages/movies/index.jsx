import dynamic from "next/dynamic"
import { useRef } from "react"
import { useRouter } from "next/navigation"

import MoviesCardGridPlaceHolder from "@/components/MoviesCardGrid/MoviesCardGridPlaceHolder"
import PageCoverPlaceHolder from "@/components/PageCover/PageCoverPlaceHolder"
import PaginationBar from "@/components/PaginationBar"
import SearchBar from "@/components/SearchBar"

import { fetchMovies } from "@/util/API"
import Head from "next/head"

const MoviesCardGrid = dynamic(() => import("@/components/MoviesCardGrid"), {
  loading: () => <MoviesCardGridPlaceHolder />,
})
const SimpleCover = dynamic(() => import("@/components/SimpleCover"), {
  loading: () => <PageCoverPlaceHolder />,
})

function MoviesPage({ movies, name, category, genre, search, page, limit }) {
  const searchRef = useRef()
  const router = useRouter()
  const queryParams = { search, category, genre }

  function handleSearch(e) {
    e.preventDefault()
    const search = searchRef.current.value
    console.log(search)
    router.push({
      pathname: "/movies",
      query: { search, category, genre, page: 1 },
    })
    searchRef.current.value = ""
  }

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content="Unlimited movies, TV shows, and more"
        />
      </Head>
      <SimpleCover
        imageUrl="https://www.screentest.xyz/wp-content/uploads/2022/09/netflix.jpg"
        title="Unlimited movies, TV shows, and more"
        subTitle="Start buy looking for your favorite movie"
        searchBar={
          <SearchBar
            placeholder="Search for an movie"
            searchRef={searchRef}
            handleSubmit={handleSearch}
            size="lg"
            btnText="Search"
          />
        }
      />
      <main>
        <div className="flex mx-auto max-w-6xl border-b-4 pb-3 border-red-600 items-center justify-between">
          <h2 className="dark:text-white text-3xl">{name}</h2>
          <PaginationBar
            pathname="/movies"
            limit={limit}
            page={page}
            queryParams={queryParams}
          />
        </div>
        <div className="my-8">
          <MoviesCardGrid movies={movies} />
        </div>
        <div className="flex mx-auto max-w-6xl border-t-4 pt-3 mb-20 border-red-600 items-center justify-between">
          <h2 className="dark:text-white text-3xl">{name}</h2>
          <PaginationBar
            pathname="/movies"
            limit={limit}
            page={page}
            queryParams={queryParams}
          />
        </div>
      </main>
    </>
  )
}

export default MoviesPage

export async function getServerSideProps({ query }) {
  const page = query.page ? Number(query.page) : 1
  const category = query.category ? query.category : ""
  const genre = query.genre ? query.genre : ""
  const name = query.name ? query.name : "Movies"
  const search = query.search ? query.search : ""
  const data = await fetchMovies(search, category, genre, page)
  const limit = data.total_pages > 20 ? 20 : data.total_pages
  const movies = await data.results
  return {
    props: {
      movies,
      name,
      category,
      genre,
      search,
      page,
      limit,
    },
  }
}
