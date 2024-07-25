import { FC } from 'react'
import Container from '../common/Container'
import SocialBlock from '../common/SocialBlock'
import s from './style.module.css'


const Contacts: FC = () => {
  return (
    <Container>
      <div className={s.centerBlock}>
        <SocialBlock />
        <iframe className={s.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40480.1786872729!2d13.782555963123926!3d50.64548373431734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47098e8931327f39%3A0x400af0f6615fc50!2z0KLQtdC_0LvQuNGG0LU!5e0!3m2!1sru!2scz!4v1717835876152!5m2!1sru!2scz" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Container>
  )
}

export default Contacts