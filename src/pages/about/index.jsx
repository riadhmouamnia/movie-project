import AboutCard from "@/components/AboutCard"
import { cardContent } from "@/components/AboutCard/cardContent"

function AboutUsPage() {
  return (
    <div>
      {cardContent.map((card) => (
        <AboutCard key={card.name} {...card} />
      ))}
    </div>
  )
}

export default AboutUsPage
