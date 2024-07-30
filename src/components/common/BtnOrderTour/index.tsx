import { Link } from "react-router-dom"
import s from './style.module.css'

const BtnOrderTour = () => {
  return (
    <Link className={s.btn} to="/order">Заказать тур</Link>
  )
}

export default BtnOrderTour