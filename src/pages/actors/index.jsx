import ActorCardPlaceHolder from "@/components/ActorCard/ActorCardPlaceHolder"
import PaginationBar from "@/components/PaginationBar"
import SearchBar from "@/components/SearchBar"
import { getActors, getActorsByName } from "@/util/API"
import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import PageCoverPlaceHolder from "@/components/PageCover/PageCoverPlaceHolder"

// lazy UI
const ActorCard = dynamic(() => import("@/components/ActorCard"), {
  loading: () => <ActorCardPlaceHolder />,
})
const SimpleCover = dynamic(() => import("@/components/SimpleCover"), {
  loading: () => <PageCoverPlaceHolder />,
})

const ActorsPage = () => {
  const [actors, setActors] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const searchRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()
    const name = searchRef.current.value
    try {
      const actors = await getActorsByName(name)
      setActors(actors.results)
      setTotalPages(actors.total_pages)
    } catch (error) {
      console.error(error)
    }
    searchRef.current.value = ""
  }

  console.log(actors)

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const actors = await getActors(currentPage)
        setActors(actors.results)
        setTotalPages(actors.total_pages)
      } catch (error) {
        console.error(error)
      }
    }

    fetchActors()
  }, [currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <SimpleCover
        title="The actors who bring our favorite characters to life."
        subTitle="See the stars of your favorite movies and TV shows up close and personal."
        imageUrl="https://variety.com/wp-content/uploads/2022/03/one-piece.jpg?w=1000"
        searchBar={
          <SearchBar searchRef={searchRef} handleSubmit={handleSubmit} />
        }
      />
      <main className="mx-auto text-center">
        {actors.map((actor) => (
          <ActorCard key={actor.id} {...actor} />
        ))}
      </main>

      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default ActorsPage
