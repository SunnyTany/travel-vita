import { FC } from 'react'
import { Link } from 'react-router-dom'
// import { useFetch } from '../../../hooks/useFetch'
import { seaTours } from "../../../data"
import WrapperMain from '../../common/WrapperMain'
import FilterButtons from '../../common/FilterButtons'
import s from './style.module.css'

const SeaTours: FC = () =>{

  // useEffect(() => {
  //   const seaTours = useFetch( 'https://5555555555555', 10)
  //   console.log(seaTours)
  // }, [])

  return (
    <WrapperMain>
      <h1 className={s.title}>Туры на море</h1>
      <FilterButtons />
      <div className={s.toursWrap}>
        {
          seaTours.map( tour => {
            return (
              <div className={s.tourCard} key={tour.id}>
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
                  <Link className={s.link} to={`/seatours/${tour.slug}`}>
                    Посмотреть тур
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </WrapperMain>
  )
}

export default SeaTours