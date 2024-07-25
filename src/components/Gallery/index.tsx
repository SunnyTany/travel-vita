import { FC } from 'react'
import Container from "../common/Container"
import { galleryImg } from '../../data'
import s from './style.module.css'

const Gallery: FC = () => {

  const buttons = ['Все', 'Италия', 'Франция', 'Греция', 'Xорватия']

  const imageStyle = {
    position: "relative",
    width: "500px",
    height: "300px",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }

  return (
    <Container>
      <h2>Галерея</h2>
      <div className={s.buttons}>
        { buttons.map( (button) => <button className={s.button} key={button}>{button}</button> ) }
      </div>
      <div className={s.photos}>
        { galleryImg.map( (img) => {

          return  (<div className={s.photo} style={{backgroundImage: `url(${img.src ? img.src : "https://via.placeholder.com/300x200"})`, ...imageStyle}} key={img.id}>
                    <p className={s.photoTitle}>{img.title} - {img.country}</p>
                  </div>)
        }) }
        
      </div>
    </Container>
  )
}

export default Gallery

