import Head from "next/head"
import dynamic from "next/dynamic"
import { useRef } from "react"
import { useRouter } from "next/navigation"

// utils
import { fetchMovies } from "@/util/API"

// component imports
import PageCoverPlaceHolder from "@/components/PageCover/PageCoverPlaceHolder"
import SearchBar from "@/components/SearchBar"
import MovieCardPlaceHolder from "@/components/MovieCard/MovieCardPlaceHolder"
import PaginationPlaceHolder from "@/components/PaginationBar/PaginationPlaceHolder"

// lazy UI
const MovieCard = dynamic(() => import("@/components/MovieCard"), {
  loading: () => <MovieCardPlaceHolder />,
})
const SimpleCover = dynamic(() => import("@/components/SimpleCover"), {
  loading: () => <PageCoverPlaceHolder />,
})
const PaginationBar = dynamic(() => import("@/components/PaginationBar"), {
  loading: () => <PaginationPlaceHolder />,
})

function MoviesPage({ movies, name, category, genre, search, page, limit }) {
  const searchRef = useRef()
  const router = useRouter()
  const queryParams = { name, search, category, genre }

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
      <main className="mx-auto text-center">
        <PaginationBar
          pathname="/movies"
          limit={limit}
          page={page}
          title={name}
          queryParams={queryParams}
        />
        <div className="my-8 min-h-[80vh]">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <PaginationBar
          pathname="/movies"
          limit={limit}
          page={page}
          title={name}
          queryParams={queryParams}
        />
      </main>
    </>
  )
}

export default MoviesPage

export async function getServerSideProps({ query }) {
  const page = query.page ? Number(query.page) : 1
  const category = query.category ? query.category : ""
  const genre = query.genre ? query.genre : ""
  const name = query.name ? query.name : query.search
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
