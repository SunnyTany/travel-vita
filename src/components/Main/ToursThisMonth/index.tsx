import {FC} from 'react'
import { thisMonth} from '../../../data/index'
// import Section from '../../common/Section'
import CardTour from '../../common/CardTour'
import FilterButtons from '../../common/FilterButtons'
import WrapperMain from '../../common/WrapperMain'
import s from './style.module.css'

const ToursThisMonth:FC = () => {

   // useEffect(() => {
  //   const seaTours = useFetch( 'https://5555555555555', 10)
  //   console.log(seaTours)
  // }, [])

  return (
    <main>
      <WrapperMain>
        <h1 className={s.title}>Туры этого месяца</h1>
        <FilterButtons />
        {thisMonth.map((tour) => (
          <CardTour key={tour.id} tour={tour} />
        ))}
      </WrapperMain>
    </main>
  )
}

export default ToursThisMonth