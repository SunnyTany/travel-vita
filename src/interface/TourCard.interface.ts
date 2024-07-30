interface TourCardInterface {
  title: string
  country: string
  id: number
  slug: string
  img: {
    url: string
    alt: string
  }
  price: number
  date: string
}

export default TourCardInterface