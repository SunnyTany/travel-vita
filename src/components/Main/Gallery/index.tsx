import { FC } from 'react'
import { galleryImg } from '../../../data'
import WrapperMain from '../../common/WrapperMain'
import FilterButtons from '../../common/FilterButtons'
import s from './style.module.css'

const Gallery: FC = () => {

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
    <WrapperMain>
      <h1 className={s.title}>Галерея</h1>
      <FilterButtons/>
      <div className={s.photos}>
        { galleryImg.map( (img) => {
          return  (<div className={s.photo} style={{backgroundImage: `url(${img.src ? img.src : "https://via.placeholder.com/300x200"})`, ...imageStyle}} key={img.id}>
                    <p className={s.photoTitle}>{img.title} - {img.country}</p>
                  </div>)
        }) }
        
      </div>
    </WrapperMain>
  )
}

export default Gallery

