import PaginationBar from "@/components/PaginationBar"
import { getActors } from "@/util/API"
import Link from "next/link"
import { useState, useEffect, Suspense } from "react"

const ActorsPage = () => {
  const [actors, setActors] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

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
    <div>
      <h1>Actors</h1>
      <Suspense
        fallback={<h1 className="text-5xl mt-40 text-white">Loading...</h1>}
      ></Suspense>
      <ul>
        {actors.map((actor) => (
          <li className="text-4xl text-white" key={actor.id}>
            <Link href={`/actors/${actor.id}`}>{actor.name}</Link>
          </li>
        ))}
      </ul>

      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default ActorsPage
