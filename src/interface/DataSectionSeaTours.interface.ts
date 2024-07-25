interface DataSectionSeaToursInterface {
  title: string
  country: string
  id: number
  img: {
    url: string
    name: string
  }
  price: number
  departureDate: string
  returnDate: string
  duration: string
  content: string[]
  footer: string
  key: number
}

export default DataSectionSeaToursInterface