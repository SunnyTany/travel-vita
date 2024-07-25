import {FC} from 'react'
import Container from "../Container"
import { announcementNextMonth } from '../../../data'
import s from './style.module.css'

const SideBar:FC = () => {

  return (
    <aside className={s.aside}>
      <Container>
        <h4>Анонс на следующий месяц</h4>
        <ul>
          {announcementNextMonth.map( item => {
            return (
              <li className={s.item} key={item.id}>
                <a>
                  <span className={s.title}>{item.title} </span>
                  <div className={s.date}>{item.date}  - {item.price} czk</div>
                </a>
              </li>
            )
          })}
        </ul>
      </Container>
    </aside>
  )
}

export default SideBar