import {seaTours} from "../../../data"
import SectionSeaTour from "../SectionSeaTour"
import {useParams} from "react-router-dom"

// titleTour: TypeTitleTour ? => props

const SeaTour = () => {
  let { id } = useParams()

  const tour = seaTours.find((country) => country.tours.find((tour) => tour.title === titleTour) )
  console.log(tour)
  
  return (
    <>
      <SectionSeaTour key={tour.id} {...tour}/>
      <h1>Sea tour</h1>
    </>
  )
}

export default SeaTour