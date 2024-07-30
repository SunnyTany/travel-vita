import { Link } from "react-router-dom"
import {thisMonth} from "../../../data/index.tsx"
import {useParams} from "react-router-dom"
import TourInterface from '../../../interface/Tour.interface.ts'
import WrapperMain from "../../common/WrapperMain/index.tsx"
import BtnOrderTour from "../../common/BtnOrderTour/index.tsx"
import s from './style.module.css'

const Tour = () => {
  const {slug} = useParams()

  // ! потім замінити на запит на сервер
  const tour: TourInterface | undefined = thisMonth.find(tour => tour.slug === slug)
  console.log(tour)
  // ! як приклад, але обробити відсутність тура
  if (!tour) {
    return (
      <WrapperMain>
        <h4>Такого тура нет, но мы работаем над этим</h4>
        <p>Для выбора тура, перейдите на главную страницу</p>
        <Link className={s.link} to='/'>Главная</Link>
      </WrapperMain>
    )
  }

  return (
      <WrapperMain>
        <section id={tour.title}>
          <div>
            <h2 className={s.title}>{tour.title}</h2>
            <div>
              <p>{tour.country}</p>
              <div>{tour.departureDate} - {tour.price} czk</div>
            </div>
          </div>
          <img className={s.img} src={tour.img.url} alt={tour.img.alt}/>
          <div className={s.body}>
            {tour.content.map(paragraf => <p key={paragraf}>{paragraf}</p>)}
          </div>
          <div className={s.footer}>
            <p>длительность: <strong>{tour.duration}</strong></p>
            <p>Дата отправления: <strong>{tour.departureDate}</strong></p>
            <p>Дата возвращения: <strong>{tour.returnDate}</strong></p>
            <p>Экскурсию проводит <strong>{tour.footer}</strong></p>
          </div>
        </section>
        <BtnOrderTour/>
      </WrapperMain>
  )
}

export default Tour