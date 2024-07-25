import {FC} from 'react'
import Container from '../Container'
import s from './style.module.css'
import NavMenu from '../NavMenu'

const Footer:FC = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <NavMenu />
        <p className={s.copyright}>© 2024. Все права защищены</p>
      </Container>
    </footer>
  )
}

export default Footer