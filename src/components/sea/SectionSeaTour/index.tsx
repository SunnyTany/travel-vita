import DataSectionSeaToursInterface from '../../../interface/DataSectionSeaTours.interface'
import s from './style.module.css'

const SectionSeaTour = ({title, country, img, price, departureDate, returnDate, duration, content, footer}: DataSectionSeaToursInterface) => {
  return (
    <section id={title}>
      <div>
        <h2 className={s.title}>{title}</h2>
        <div>
          <p>{country}</p>
          <div>{departureDate} - {price} czk</div>
        </div>
      </div>
      <img className={s.img} src={img.url} alt={img.name}/>
      <div className={s.body}>
        {content.map(paragraf => <p key={paragraf}>{paragraf}</p>)}
      </div>
      <div className={s.footer}>
        <p>длительность: <strong>{duration}</strong></p>
        <p>Дата отправления: <strong>{departureDate}</strong></p>
        <p>Дата возвращения: <strong>{returnDate}</strong></p>
        <p>Экскурсию проводит <strong>{footer}</strong></p>
      </div>
    </section>
  )
}

export default SectionSeaTour