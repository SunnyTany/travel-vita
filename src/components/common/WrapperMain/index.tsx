import ContainerProps from '../../../interface/ContainerProps.interface'
import s from './style.module.css'

const WrapperMain = ({children}: ContainerProps) => {

  return (
    <div className={s.wrapper}>
      {children}
    </div>
  )
}

export default WrapperMain