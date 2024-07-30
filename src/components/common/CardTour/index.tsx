import {Link} from 'react-router-dom'
import TourCardInterface from '../../../interface/TourCard.interface'
import s from './style.module.css'

const CardTour = ({ tour }: TourCardInterface ) => {
  return (
    <div className={s.tourCard}>
      <div className={s.top}>
        <h2 className={s.titleTour}>{tour.title}</h2>
        <h3 className={s.titleCountry}>{tour.country}</h3>
        <div className={s.imgWrap}>
          <img className={s.img} src={tour.img.url} alt={tour.img.alt}/>
        </div>
      </div>
      <div className={s.bottom}>
        <p className={s.date}>{tour.date}</p>
        <p className={s.price}>{tour.price} крон</p>
        <Link className={s.link} to={`/thismonth/${tour.slug}`}>
          Посмотреть тур
        </Link>
      </div>
    </div>
  )
}

export default CardTour