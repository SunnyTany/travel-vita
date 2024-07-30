import {FC} from 'react'
import Container from "../Container"
import Logo from "../Logo"
import BtnOrderTour from '../BtnOrderTour'
import SocialBlock from '../SocialBlock'
import NavMenu from '../NavMenu'
import AuthLink from '../../Auth/AuthLink'
import s from './style.module.css'

const Header:FC = () => {

  return (
    <header className={s.header}>
      <Container>
        <div className={s.top}>
          <div>
            <SocialBlock/>
            <BtnOrderTour/>
          </div>
          <Logo/>
          <AuthLink/>
        </div>
        <NavMenu/>
      </Container>
    </header>
  )
}

export default Header