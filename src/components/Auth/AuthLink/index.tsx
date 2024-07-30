import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { logoutAsync } from '../../../redux/slices/authSlice'
import s from './style.module.css'

const AuthLink = () => {
  const {isAuth} = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const username = 'Татьяна Колкова'

  return (
      <div>
        {
          isAuth ? (
            <div className={s.wrapper}>
              <p>{username}</p>
              <Link className={s.btnAuth} to="/profile">Мой профиль</Link>
              <button className={s.btnAuth} onClick={() => dispatch(logoutAsync())}>Выход</button>
            </div>
        ) : (
            <div className={s.wrapper}>
              <Link className={s.btnAuth} to="/login">Войти</Link>
              <Link className={s.btnAuth} to="/register">Регистрация</Link>
            </div>
          )
        }
      </div>
  )
}

export default AuthLink