import ContainerProps from '../../../../interface/ContainerProps.interface'
import s from './style.module.css'

const FilterButton = ({children}: ContainerProps) => {
  return (
    <button className={s.button}>{children}</button>
  )
}

export default FilterButton