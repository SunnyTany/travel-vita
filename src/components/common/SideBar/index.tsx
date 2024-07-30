import {FC} from 'react'
import {Link} from "react-router-dom"
import Container from "../Container"
import { nextMonth } from '../../../data'
import s from './style.module.css'

const SideBar:FC = () => {

  return (
    <aside className={s.aside}>
      <Container>
          <h4>Анонс на следующий месяц</h4>
          <ul>
            {nextMonth.map( item => {
              return (
                <li className={s.item} key={item.id}>
                  <span className={s.title}>{item.title} </span>
                  <div className={s.date}>{item.date}  - {item.price} czk</div>
                  <Link to={`/announcement/${item.slug}`}>Подробнее</Link>
                </li>
              )
            })}
          </ul>
      </Container>
    </aside>
  )
}

export default SideBar