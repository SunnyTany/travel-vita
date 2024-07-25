import ContainerProps from '../../../interface/ContainerProps.interface'
import s from './style.module.css'

const Container = ({children}: ContainerProps) => {

  return (
    <div className={s.container}>
      {children}
    </div>
  )
}

export default Container