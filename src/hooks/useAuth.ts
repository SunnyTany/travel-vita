import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'

const useAuth = () => {
  // const {isAuth, user} = useSelector((state: RootState) => state.auth)
  const {isAuth} = useSelector((state: RootState) => state.auth)
  return {
    isAuth
    // username: user.name,
    // token: user.token,
    // id: user.id
  }
}

export default useAuth
