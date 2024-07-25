import ContainerProps from '../../../interface/ContainerProps.interface'
import s from './style.module.css'

const FlexBlock = ({children}: ContainerProps) => {

  return (
    <div className={s.flexBlock}>
      {children}
    </div>
  )
}

export default FlexBlock