import { filterButtons } from '../../../data'
import FilterButton from './FilterButton'
import s from './style.module.css'

const FilterButtons = () => {

  return (
    <div className={s.buttons}>
      <div className={s.buttons}>
          { filterButtons.map( (button) => <FilterButton key={button}>{button}</FilterButton> ) }
        </div>
    </div>
  )
}

export default FilterButtons