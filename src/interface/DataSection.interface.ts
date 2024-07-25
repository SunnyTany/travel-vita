interface DataSectionInterface {
  title: string
  id: number
  price: number
  departureDate: string
  returnDate: string
  img: {
    url: string,
    name: string
  } 
  content: string[]
  duration: string
  footer: string
}

export default DataSectionInterface