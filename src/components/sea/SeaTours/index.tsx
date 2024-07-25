import {FC, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {seaTours} from "../../../data"
// import { useFetch } from '../../../hooks/useFetch'
import s from './style.module.css'


const SeaTours: FC = () =>{

  // useEffect(() => {
  //   const seaTours = useFetch( 'https://5555555555555', 10)
  //   console.log(seaTours)
  // }, [])

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Туры на море</h1>
      <ul>
        {
          seaTours.map(item => {
            return (
              <li className={s.country} key={item.id}>
                <h4>{item.country}</h4>
                <ul className={s.countryList}>
                  {item.tours.map(tour => {
                    return (
                      <li className={s.tour} key={tour.id}>
                        <Link to={`/seatours:${tour.title}`}>
                          <div className={s.tourCard}>
                            <div>
                              <h3>{tour.title}</h3>
                              <div className={s.imgWrap}>
                                <img src={tour.img.url} alt={tour.img.alt}/>
                              </div>
                            </div>
                            <div>{tour.date}</div>
                          </div>
                        </Link>
                      </li>
                    )
                  })
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default SeaTours