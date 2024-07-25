import {FC} from 'react'
import Container from '../common/Container'
import Section from '../common/Section'
import {italieMay2024} from '../../data/index'

const ToursThisMonth:FC = () => {
  return (
    <main>
      <Container>
        <Section title={italieMay2024.title} id={italieMay2024.id} price={italieMay2024.price} departureDate={italieMay2024.departureDate} returnDate={italieMay2024.returnDate} duration={italieMay2024.duration} img={italieMay2024.img} content={italieMay2024.content} footer={italieMay2024.footer}/>
      </Container>
    </main>
  )
}

export default ToursThisMonth