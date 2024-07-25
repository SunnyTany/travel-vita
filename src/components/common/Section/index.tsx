import DataSectionInterface from '../../../interface/DataSection.interface'
import BtnOrderTour from '../../BtnOrderTour'
import styles from './style.module.css'

const Section = ({title, price, departureDate, returnDate, id, img, content, duration, footer}: DataSectionInterface) => {
  return (
    <section className={styles.section}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <span>{departureDate} - {price} czk</span>
      </div>
      <img className={styles.img} src={img.url} alt={img.name}/>
      <div className={styles.body}>{content.map(paragraf => <p key={id}>{paragraf}</p>)}</div>
      <div className={styles.footer}>
        <p>длительность: <strong>{duration}</strong></p>
        <p>Дата отправления: <strong>{departureDate}</strong></p>
        <p>Дата возвращения: <strong>{returnDate}</strong></p>
        <p>Экскурсию проводит <strong>{footer}</strong></p>
      </div>
      <BtnOrderTour/>
    </section>
  )
}

export default Section