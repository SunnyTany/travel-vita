import { NavLink } from "react-router-dom"
import s from "./style.module.css"

const NavMenu = () => {
  return (
    <nav className={s.navMenu}>
      <ul className={s.navMenuList}>
        <li className={`${s.navMenuItem} ${s.thisMonth}`}>
          <NavLink className={s.link} to='/'>Туры этого месяца</NavLink>
        </li>
        <li className={`${s.navMenuItem} ${s.seaTours}`}>
          <NavLink className={s.link} to='/seatours'>Туры на море</NavLink>
        </li>
        <li className={`${s.navMenuItem} ${s.photo}`}>
          <NavLink className={s.link} to='/gallery'>Фотоотчет</NavLink>
        </li>
        <li className={`${s.navMenuItem} ${s.contacts}`}>
          <NavLink className={s.link} to='/contacts'>Контакты</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu