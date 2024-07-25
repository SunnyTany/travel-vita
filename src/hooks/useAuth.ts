import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'	

const useAuth = () => {
  const { login, token, id } = useSelector((state: RootState) => state.auth)
  return {
    isAuth: !!login,
    login,
    token, 
    id
  }
}

export default useAuth