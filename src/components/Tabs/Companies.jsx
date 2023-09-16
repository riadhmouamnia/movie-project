import { IMAGE_BASE_URL } from "@/util/API"
import Image from "next/image"

function Companies({ movie }) {
  return (
    <div className="py-8 flex items-center flex-wrap gap-8">
      {movie.production_companies.map((company) => (
        <div
          key={company.id}
          className="flex items-center justify-center gap-4"
        >
          {company.logo_path && (
            <Image
              height={40}
              width={40}
              alt={company.name}
              src={`${IMAGE_BASE_URL}${company.logo_path}`}
            />
          )}
          <h3 className="dark:text-white text-xl">{company.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default Companies
